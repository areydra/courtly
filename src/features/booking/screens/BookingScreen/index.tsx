import { useCallback, useMemo, useState } from 'react';

import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/theme';
import { useAvailability } from '@/features/booking/hooks/useAvailability';
import { useCreateBooking } from '@/features/booking/hooks/useCreateBooking';
import type { BookingResult } from '@/features/booking/types/court.types';
import { ApiError } from '@/lib/api-client';
import { queryClient } from '@/lib/query-client';
import { formatRupiah } from '@/utils/format';

import styles from './styles';
import BookingFlowSheet from './components/BookingFlowSheet';
import type { FlowStep } from './components/BookingFlowSheet';
import CalendarSheet from './components/CalendarSheet';
import CourtSection from './components/CourtSection';
import DateSection from './components/DateSection';
import Header from './components/Header';
import SummaryFooter from './components/SummaryFooter';
import TimeSlotsSection from './components/TimeSlotsSection';
import { formatDateLabel, getDateOptions, parseIsoDate, toIsoDate } from './utils';

interface BookingScreenProps {
    facilityId: string;
    facilityName: string;
}

export default function BookingScreen({ facilityId, facilityName }: BookingScreenProps) {
    const router = useRouter();
    const today = useMemo(() => new Date(), []);
    const [courtId, setCourtId] = useState('');
    const [selectedDateStr, setSelectedDateStr] = useState(() => toIsoDate(today));
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [flowStep, setFlowStep] = useState<FlowStep>('booking');
    const [bookingResult, setBookingResult] = useState<BookingResult | null>(null);
    const [bookingError, setBookingError] = useState<string | null>(null);

    const createBooking = useCreateBooking();
    const { data: availability, isLoading, isError } = useAvailability(facilityId, selectedDateStr);
    const courts = useMemo(() => availability?.courts ?? [], [availability]);

    const selectedDate = useMemo(() => parseIsoDate(selectedDateStr), [selectedDateStr]);
    const dateOptions = useMemo(() => getDateOptions(today, 7), [today]);
    const selectedDateLabel = useMemo(() => formatDateLabel(selectedDate), [selectedDate]);

    const activeCourt = useMemo(
        () => courts.find((court) => court.id === courtId) ?? courts[0] ?? null,
        [courts, courtId],
    );
    const selectedSlot = useMemo(
        () => activeCourt?.slots.find((slot) => slot.startTime === selectedTime) ?? null,
        [activeCourt, selectedTime],
    );

    const summaryLabel = selectedSlot
        ? `${activeCourt?.name} · ${selectedSlot.startTime}-${selectedSlot.endTime}`
        : 'Select a time slot';
    const summaryValue = selectedSlot ? formatRupiah(selectedSlot.price) : '—';

    const confirmDetails = selectedSlot && activeCourt
        ? {
              facilityName,
              courtName: activeCourt.name,
              dateLabel: selectedDateLabel,
              timeLabel: `${selectedSlot.startTime}-${selectedSlot.endTime}`,
              priceLabel: formatRupiah(selectedSlot.price),
          }
        : null;

    const handleSelectDate = useCallback((iso: string) => {
        setSelectedDateStr(iso);
        setSelectedTime(null);
    }, []);

    const handleSelectCourt = useCallback((id: string) => {
        setCourtId(id);
        setSelectedTime(null);
    }, []);

    const handleSelectSlot = useCallback((startTime: string) => {
        setSelectedTime((prev) => (prev === startTime ? null : startTime));
    }, []);

    const handleOpenCalendar = useCallback(() => {
        setShowCalendar(true);
    }, []);

    const handleCloseCalendar = useCallback(() => {
        setShowCalendar(false);
    }, []);

    const handleSelectCalendarDay = useCallback((date: Date) => {
        setSelectedDateStr(toIsoDate(date));
        setSelectedTime(null);
        setShowCalendar(false);
    }, []);

    const handleContinue = useCallback(() => {
        if (selectedSlot) {
            setFlowStep('confirm');
        }
    }, [selectedSlot]);

    const handleCancelConfirm = useCallback(() => {
        setFlowStep('booking');
    }, []);

    const handleCloseFlowSheet = useCallback(() => {
        setFlowStep('booking');
    }, []);

    const handleDismissError = useCallback(() => {
        setFlowStep('booking');
        setSelectedTime(null);
        setBookingError(null);
        queryClient.invalidateQueries({ queryKey: ['facility-availability', facilityId, selectedDateStr] });
    }, [facilityId, selectedDateStr]);

    const handleAcceptConfirm = useCallback(() => {
        if (!selectedSlot || !activeCourt) {
            return;
        }

        setFlowStep('loading');

        createBooking.mutate(
            {
                courtId: activeCourt.id,
                date: selectedDateStr,
                startTime: selectedSlot.startTime,
                endTime: selectedSlot.endTime,
            },
            {
                onSuccess: (data) => {
                    setBookingResult({
                        bookingReference: data.bookingReference,
                        status: data.status,
                        facilityName: data.facility.name,
                        courtName: data.court.name,
                        dateLabel: formatDateLabel(parseIsoDate(data.date)),
                        timeLabel: `${data.startTime}-${data.endTime}`,
                        priceLabel: formatRupiah(data.price),
                        serviceFeeLabel: formatRupiah(data.serviceFee),
                        totalLabel: formatRupiah(data.totalPrice),
                    });
                    setFlowStep('success');
                    queryClient.invalidateQueries({ queryKey: ['facility-availability', facilityId, selectedDateStr] });
                },
                onError: (error) => {
                    setBookingError(
                        error instanceof ApiError ? error.message : 'Something went wrong. Please try again.',
                    );
                    setFlowStep('error');
                },
            },
        );
    }, [selectedSlot, activeCourt, createBooking, facilityId, selectedDateStr]);

    const handleDoneSuccess = useCallback(() => {
        setFlowStep('booking');
        setSelectedTime(null);
        setBookingResult(null);
    }, []);

    const handleSeeBookings = useCallback(() => {
        router.push('/my-bookings');
    }, [router]);

    return (
        <View
            style={styles.screen}
            testID="booking-screen"
        >
            <StatusBar style="dark" />

            <Header facilityName={facilityName} />

            {isLoading && (
                <View style={styles.centered}>
                    <ActivityIndicator
                        color={Colors.teal700}
                        testID="booking-loading"
                    />
                </View>
            )}

            {!isLoading && (isError || !activeCourt) && (
                <View style={styles.centered}>
                    <Text
                        style={styles.errorText}
                        testID="booking-error"
                    >
                        Failed to load court availability.
                    </Text>
                </View>
            )}

            {!isLoading && !isError && activeCourt && (
                <>
                    <ScrollView contentContainerStyle={styles.scrollContent}>
                        <DateSection
                            dateOptions={dateOptions}
                            selectedDateStr={selectedDateStr}
                            selectedDateLabel={selectedDateLabel}
                            onSelectDate={handleSelectDate}
                            onOpenCalendar={handleOpenCalendar}
                        />

                        <CourtSection
                            courts={courts}
                            activeCourtId={activeCourt.id}
                            onSelectCourt={handleSelectCourt}
                        />

                        <TimeSlotsSection
                            slots={activeCourt.slots}
                            selectedTime={selectedTime}
                            onSelectSlot={handleSelectSlot}
                        />
                    </ScrollView>

                    <SummaryFooter
                        summaryLabel={summaryLabel}
                        summaryValue={summaryValue}
                        continueDisabled={!selectedSlot}
                        onContinue={handleContinue}
                    />
                </>
            )}

            <CalendarSheet
                isOpen={showCalendar}
                onClose={handleCloseCalendar}
                selectedDate={selectedDate}
                minimumDate={today}
                onSelectDate={handleSelectCalendarDay}
            />

            <BookingFlowSheet
                flowStep={flowStep}
                onClose={handleCloseFlowSheet}
                confirmDetails={confirmDetails}
                bookingResult={bookingResult}
                errorMessage={bookingError}
                onCancelConfirm={handleCancelConfirm}
                onAcceptConfirm={handleAcceptConfirm}
                onDoneSuccess={handleDoneSuccess}
                onDismissError={handleDismissError}
                onSeeBookings={handleSeeBookings}
            />
        </View>
    );
}
