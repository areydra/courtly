import { Image, Text, View } from 'react-native';

import type { Facility } from '@/features/home/types/facility.types';
import { capitalize, formatRupiah } from '@/utils/format';

import styles from './styles';
import LocationPinIcon from '../../../LocationPinIcon';
import StarIcon from '../../../StarIcon';

interface FacilityCardProps {
    facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
    return (
        <View
            style={styles.card}
            testID={`home-facility-card-${facility.id}`}
        >
            <View style={styles.imageWrapper}>
                <Image
                    source={{ uri: facility.imageUrl }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.priceBadge}>
                    <Text style={styles.priceBadgeText}>From {formatRupiah(facility.startingPrice)}</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.nameRow}>
                    <Text style={styles.name}>{facility.name}</Text>
                </View>

                <View style={styles.metaRow}>
                    <View style={styles.locationGroup}>
                        <LocationPinIcon />
                        <Text
                            style={styles.locationText}
                            numberOfLines={1}
                        >
                            {facility.location}
                        </Text>
                    </View>
                    <View style={styles.ratingGroup}>
                        <StarIcon />
                        <Text style={styles.ratingText}>{facility.rating.toFixed(1)}</Text>
                        <Text style={styles.reviewCountText}>({facility.reviewCount})</Text>
                    </View>
                </View>

                <View style={styles.tagsRow}>
                    {facility.sports.map((sport) => (
                        <View
                            key={sport}
                            style={styles.tag}
                        >
                            <Text style={styles.tagText}>{capitalize(sport)}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
