import { ActivityIndicator, Text, View } from 'react-native';

import BottomSheet from '@/components/common/BottomSheet';
import { Colors } from '@/constants/theme';
import type { CancelResult } from '@/features/booking/types/my-booking.types';

import styles from './styles';
import CancelErrorStep from './components/CancelErrorStep';
import CancelledStep from './components/CancelledStep';
import CancellingStep from './components/CancellingStep';
import ConfirmCancelStep from './components/ConfirmCancelStep';
import DetailStep from './components/DetailStep';

export type SheetStep = 'idle' | 'detail' | 'confirm' | 'loading' | 'success' | 'cancel-error';

interface DetailInfo {
    statusLabel: string;
    facilityName: string;
    courtName: string;
    dateTimeLabel: string;
    bookingReference: string;
    priceLabel: string;
    showCancelButton: boolean;
}

interface BookingDetailSheetProps {
    sheetStep: SheetStep;
    onClose: () => void;
    detail: DetailInfo | null;
    isDetailLoading: boolean;
    isDetailError: boolean;
    cancelResult: CancelResult | null;
    cancelErrorMessage: string | null;
    onOpenCancel: () => void;
    onBackToDetail: () => void;
    onConfirmCancel: () => void;
    onDoneCancel: () => void;
}

export default function BookingDetailSheet({
    sheetStep,
    onClose,
    detail,
    isDetailLoading,
    isDetailError,
    cancelResult,
    cancelErrorMessage,
    onOpenCancel,
    onBackToDetail,
    onConfirmCancel,
    onDoneCancel,
}: BookingDetailSheetProps) {
    return (
        <BottomSheet
            isOpen={sheetStep !== 'idle'}
            onClose={onClose}
            testID="my-bookings-detail-sheet"
        >
            {sheetStep === 'detail' && isDetailLoading && (
                <View
                    style={styles.centered}
                    testID="my-bookings-detail-loading"
                >
                    <ActivityIndicator color={Colors.teal700} />
                </View>
            )}

            {sheetStep === 'detail' && !isDetailLoading && (isDetailError || !detail) && (
                <View
                    style={styles.centered}
                    testID="my-bookings-detail-error"
                >
                    <Text style={styles.errorText}>Failed to load booking details.</Text>
                </View>
            )}

            {sheetStep === 'detail' && !isDetailLoading && !isDetailError && detail && (
                <DetailStep
                    statusLabel={detail.statusLabel}
                    facilityName={detail.facilityName}
                    courtName={detail.courtName}
                    dateTimeLabel={detail.dateTimeLabel}
                    bookingReference={detail.bookingReference}
                    priceLabel={detail.priceLabel}
                    showCancelButton={detail.showCancelButton}
                    onPressCancel={onOpenCancel}
                />
            )}

            {sheetStep === 'confirm' && (
                <ConfirmCancelStep
                    onKeepBooking={onBackToDetail}
                    onConfirmCancel={onConfirmCancel}
                />
            )}

            {sheetStep === 'loading' && <CancellingStep />}

            {sheetStep === 'success' && cancelResult && (
                <CancelledStep
                    cancelResult={cancelResult}
                    onDone={onDoneCancel}
                />
            )}

            {sheetStep === 'cancel-error' && (
                <CancelErrorStep
                    message={cancelErrorMessage ?? 'Something went wrong. Please try again.'}
                    onDismiss={onBackToDetail}
                />
            )}
        </BottomSheet>
    );
}
