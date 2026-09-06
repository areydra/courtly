import { Image, Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import BackIcon from '@/components/BackIcon';
import { Colors } from '@/constants/theme';

import styles from './styles';

interface HeroImageProps {
    imageUrl: string;
}

export default function HeroImage({ imageUrl }: HeroImageProps) {
    const router = useRouter();
    const { top } = useSafeAreaInsets();

    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={[styles.overlayRow, { paddingTop: top + 20 }]}>
                <Pressable
                    style={styles.backButton}
                    onPress={() => router.back()}
                    testID="facility-detail-back-button"
                >
                    <BackIcon color={Colors.cream50} />
                </Pressable>
            </View>
        </View>
    );
}
