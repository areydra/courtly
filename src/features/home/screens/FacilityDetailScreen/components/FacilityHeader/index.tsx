import { Text, View } from 'react-native';

import { capitalize } from '@/utils/format';

import styles from './styles';
import LocationPinIcon from '../LocationPinIcon';
import StarIcon from '../StarIcon';

interface FacilityHeaderProps {
    name: string;
    rating: number;
    address: string;
    reviewCount: number;
    sports: string[];
}

export default function FacilityHeader({ name, rating, address, reviewCount, sports }: FacilityHeaderProps) {
    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.ratingGroup}>
                    <StarIcon />
                    <Text style={styles.ratingText}>{rating}</Text>
                </View>
            </View>

            <View style={styles.metaRow}>
                <LocationPinIcon />
                <Text
                    style={styles.addressText}
                    numberOfLines={1}
                >
                    {address}
                </Text>
                <Text style={styles.dotSeparator}>&middot;</Text>
                <Text style={styles.reviewsText}>{reviewCount} reviews</Text>
            </View>

            <View style={styles.tagsRow}>
                {sports.map((sport) => (
                    <Text
                        key={sport}
                        style={styles.tag}
                    >
                        {capitalize(sport)}
                    </Text>
                ))}
            </View>
        </View>
    );
}
