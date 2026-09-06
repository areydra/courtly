import Svg, { Path, Rect } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function BookingsIcon() {
    return (
        <Svg
            width={22}
            height={22}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.teal700}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Rect
                x={3}
                y={5}
                width={18}
                height={16}
                rx={2}
            />
            <Path d="M3 10h18M8 3v4M16 3v4" />
        </Svg>
    );
}
