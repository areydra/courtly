import { Text, View } from 'react-native';

import styles from './styles';
import CheckIcon from '../CheckIcon';

interface AmenitiesSectionProps {
    amenities: string[];
}

export default function AmenitiesSection({ amenities }: AmenitiesSectionProps) {
    return (
        <View>
            <Text style={styles.heading}>Amenities</Text>
            <View style={styles.list}>
                {amenities.map((amenity) => (
                    <View
                        key={amenity}
                        style={styles.item}
                    >
                        <CheckIcon />
                        <Text style={styles.itemText}>{amenity}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}
