import { useCallback, useMemo, useState } from 'react';

import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/theme';
import { useBookingDetail } from '@/features/booking/hooks/useBookingDetail';
import { useBookings } from '@/features/booking/hooks/useBookings';
import { useCancelBooking } from '@/features/booking/hooks/useCancelBooking';
import type { BookingListItem, CancelResult } from '@/features/booking/types/my-booking.types';
import { ApiError } from '@/lib/api-client';
import { queryClient } from '@/lib/query-client';
import { formatRupiah } from '@/utils/format';

import styles from './styles';
import BookingCard from './components/BookingCard';
import BookingCardSkeleton from './components/BookingCardSkeleton';
import BookingDetailSheet from './components/BookingDetailSheet';
import type { SheetStep } from './components/BookingDetailSheet';
import Header from './components/Header';
import type { TabKey } from './utils';
import { buildCancelResult, formatDateTimeLabel, getCategoryForTab, getStatusLabel, isUpcoming } from './utils';

const SKELETON_COUNT = 3;
const SKELETON_ITEMS = Array.from({ length: SKELETON_COUNT }, (_, index) => index);

export default function MyBookingsScreen() {
    const today = useMemo(() => new Date(), []);

    const [activeTab, setActiveTab] = useState<TabKey>('all');
    const [sheetStep, setSheetStep] = useState<SheetStep>('idle');
    const [activeBookingId, setActiveBookingId] = useState<string | null>(null);
    const [cancelResult, setCancelResult] = useState<CancelResult | null>(null);
    const [cancelErrorMessage, setCancelErrorMessage] = useState<string | null>(null);

    const category = getCategoryForTab(activeTab);
    const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useBookings(category);
    const bookings = useMemo(() => data?.pages.flatMap((page) => page.data) ?? [], [data]);

    const {
        data: bookingDetail,
        isLoading: isDetailLoading,
        isError: isDetailError,
    } = useBookingDetail(activeBookingId ?? '');
    const cancelBooking = useCancelBooking();

    const detail = bookingDetail
        ? {
              statusLabel: getStatusLabel(bookingDetail, today),
              facilityName: bookingDetail.facility.name,
              courtName: bookingDetail.court.name,
              dateTimeLabel: formatDateTimeLabel(bookingDetail),
              bookingReference: bookingDetail.bookingReference,
              priceLabel: formatRupiah(bookingDetail.totalPrice),
              showCancelButton: isUpcoming(bookingDetail, today),
          }
        : null;

    const handleSelectTab = useCallback((tab: TabKey) => {
        setActiveTab(tab);
    }, []);

    const handleEndReached = useCallback(() => {
        if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

    const handleOpenDetail = useCallback((id: string) => {
        setSheetStep('detail');
        setActiveBookingId(id);
    }, []);

    const handleOpenCancel = useCallback(() => {
        setSheetStep('confirm');
    }, []);

    const handleBackToDetail = useCallback(() => {
        setSheetStep('detail');
        setCancelErrorMessage(null);
    }, []);

    const handleCloseSheet = useCallback(() => {
        setSheetStep('idle');
        setActiveBookingId(null);
        setCancelResult(null);
        setCancelErrorMessage(null);
    }, []);

    const handleConfirmCancel = useCallback(() => {
        if (!activeBookingId) {
            return;
        }

        setSheetStep('loading');

        cancelBooking.mutate(activeBookingId, {
            onSuccess: (data) => {
                setCancelResult(buildCancelResult(data));
                setSheetStep('success');
                queryClient.invalidateQueries({ queryKey: ['bookings'] });
                queryClient.invalidateQueries({ queryKey: ['booking-detail', activeBookingId] });
            },
            onError: (error) => {
                setCancelErrorMessage(
                    error instanceof ApiError ? error.message : 'Something went wrong. Please try again.',
                );
                setSheetStep('cancel-error');
            },
        });
    }, [activeBookingId, cancelBooking]);

    return (
        <View
            style={styles.screen}
            testID="my-bookings-screen"
        >
            <StatusBar style="dark" />

            <Header
                activeTab={activeTab}
                onSelectTab={handleSelectTab}
            />

            {isLoading ? (
                <FlatList
                    data={SKELETON_ITEMS}
                    keyExtractor={(item) => `my-bookings-skeleton-${item}`}
                    contentContainerStyle={styles.listContent}
                    renderItem={() => <BookingCardSkeleton />}
                />
            ) : (
                <FlatList
                    data={bookings}
                    keyExtractor={(booking) => booking.id}
                    contentContainerStyle={styles.listContent}
                    renderItem={({ item: booking }: { item: BookingListItem }) => (
                        <BookingCard
                            booking={booking}
                            statusLabel={getStatusLabel(booking, today)}
                            onPress={() => handleOpenDetail(booking.id)}
                        />
                    )}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.5}
                    ListEmptyComponent={
                        <Text
                            style={styles.emptyText}
                            testID="my-bookings-empty"
                        >
                            No bookings here yet.
                        </Text>
                    }
                    ListFooterComponent={
                        isFetchingNextPage ? (
                            <View
                                style={styles.footerLoading}
                                testID="my-bookings-loading-more"
                            >
                                <ActivityIndicator color={Colors.teal700} />
                            </View>
                        ) : null
                    }
                />
            )}

            <BookingDetailSheet
                sheetStep={sheetStep}
                onClose={handleCloseSheet}
                detail={detail}
                isDetailLoading={isDetailLoading}
                isDetailError={isDetailError}
                cancelResult={cancelResult}
                cancelErrorMessage={cancelErrorMessage}
                onOpenCancel={handleOpenCancel}
                onBackToDetail={handleBackToDetail}
                onConfirmCancel={handleConfirmCancel}
                onDoneCancel={handleCloseSheet}
            />
        </View>
    );
}
