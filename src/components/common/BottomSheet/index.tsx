import { forwardRef, useEffect, useRef, useState } from 'react';
import type { ComponentRef, ReactNode } from 'react';

import BottomSheetModal, { BottomSheetView } from '@expo/ui/community/bottom-sheet';
import { useWindowDimensions, View } from 'react-native';

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
    const { width } = useWindowDimensions();
    const [hasOpenedOnce, setHasOpenedOnce] = useState(isOpen);
    const hasOpenedOnceRef = useRef(isOpen);

    useEffect(function mountNativeSheetOnFirstOpen() {
        if (isOpen && !hasOpenedOnceRef.current) {
            hasOpenedOnceRef.current = true;
            setHasOpenedOnce(true);
        }
    }, [isOpen]);

    useEffect(function syncSheetVisibility() {
        if (!hasOpenedOnce) {
            return;
        }
        if (isOpen) {
            sheetRef.current?.present();
        } else {
            sheetRef.current?.dismiss();
        }
    }, [isOpen, hasOpenedOnce]);

    useEffect(function dismissOnUnmount() {
        return () => {
            if (hasOpenedOnceRef.current) {
                sheetRef.current?.dismiss();
            }
        };
    }, []);

    if (!hasOpenedOnce) {
        return null;
    }

    return (
        <BottomSheetModal
            ref={sheetRef}
            enableDynamicSizing
            enablePanDownToClose
            onDismiss={onClose}
            backgroundStyle={styles.background}
        >
            <BottomSheetView style={[styles.content, { width }]}>
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
