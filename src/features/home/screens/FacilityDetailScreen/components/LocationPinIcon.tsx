import Svg, { Circle, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function LocationPinIcon() {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.gray500}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M12 21s-7-6.1-7-11.3A7 7 0 0112 2a7 7 0 017 7.7C19 14.9 12 21 12 21z" />
            <Circle
                cx={12}
                cy={9.5}
                r={2.4}
            />
        </Svg>
    );
}
