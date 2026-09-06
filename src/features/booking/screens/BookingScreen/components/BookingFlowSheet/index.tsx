import BottomSheet from '@/components/common/BottomSheet';
import type { BookingResult } from '@/features/booking/types/court.types';

import ConfirmStep from './components/ConfirmStep';
import ErrorStep from './components/ErrorStep';
import LoadingStep from './components/LoadingStep';
import SuccessStep from './components/SuccessStep';

export type FlowStep = 'booking' | 'confirm' | 'loading' | 'success' | 'error';

interface ConfirmDetails {
    facilityName: string;
    courtName: string;
    dateLabel: string;
    timeLabel: string;
    priceLabel: string;
}

interface BookingFlowSheetProps {
    flowStep: FlowStep;
    onClose: () => void;
    confirmDetails: ConfirmDetails | null;
    bookingResult: BookingResult | null;
    errorMessage: string | null;
    onCancelConfirm: () => void;
    onAcceptConfirm: () => void;
    onDoneSuccess: () => void;
    onDismissError: () => void;
}

export default function BookingFlowSheet({
    flowStep,
    onClose,
    confirmDetails,
    bookingResult,
    errorMessage,
    onCancelConfirm,
    onAcceptConfirm,
    onDoneSuccess,
    onDismissError,
}: BookingFlowSheetProps) {
    return (
        <BottomSheet
            isOpen={flowStep !== 'booking'}
            onClose={onClose}
            testID="booking-flow-sheet"
        >
            {flowStep === 'confirm' && confirmDetails && (
                <ConfirmStep
                    facilityName={confirmDetails.facilityName}
                    courtName={confirmDetails.courtName}
                    dateLabel={confirmDetails.dateLabel}
                    timeLabel={confirmDetails.timeLabel}
                    priceLabel={confirmDetails.priceLabel}
                    onCancel={onCancelConfirm}
                    onConfirm={onAcceptConfirm}
                />
            )}
            {flowStep === 'loading' && <LoadingStep />}
            {flowStep === 'success' && bookingResult && (
                <SuccessStep
                    bookingResult={bookingResult}
                    onDone={onDoneSuccess}
                />
            )}
            {flowStep === 'error' && (
                <ErrorStep
                    message={errorMessage ?? 'Something went wrong. Please try again.'}
                    onDismiss={onDismissError}
                />
            )}
        </BottomSheet>
    );
}
