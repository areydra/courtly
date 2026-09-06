import Svg, { Circle, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function ProfileIcon() {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.gray500}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Circle
                cx={12}
                cy={8}
                r={4}
            />
            <Path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </Svg>
    );
}
