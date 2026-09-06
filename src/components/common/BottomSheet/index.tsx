import { forwardRef, useEffect, useRef } from 'react';
import type { ComponentRef, ReactNode } from 'react';

import BottomSheetModal, { BottomSheetView } from '@expo/ui/community/bottom-sheet';
import { View } from 'react-native';

import styles from './styles';

export interface BottomSheetRef {
    snapToIndex: (index: number) => void;
}

interface BottomSheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    testID?: string;
}

const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(function BottomSheet(
    { isOpen, onClose, children, testID },
    ref,
) {
    const sheetRef = useRef<ComponentRef<typeof BottomSheetModal>>(null);

    useEffect(function syncSheetVisibility() {
        if (isOpen) {
            sheetRef.current?.present();
        } else {
            sheetRef.current?.dismiss();
        }
    }, [isOpen]);

    useEffect(function dismissOnUnmount() {
        return () => {
            sheetRef.current?.dismiss();
        };
    }, []);

    return (
        <BottomSheetModal
            ref={sheetRef}
            enableDynamicSizing
            enablePanDownToClose
            onDismiss={onClose}
            backgroundStyle={styles.background}
        >
            <BottomSheetView style={styles.content}>
                <View
                    style={styles.contentInner}
                    testID={testID}
                >
                    {children}
                </View>
            </BottomSheetView>
        </BottomSheetModal>
    );
});

export default BottomSheet;
