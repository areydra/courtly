import Svg, { Line, Rect } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function CourtlyLogoIcon() {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.cream50}
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Rect
                x={3}
                y={4}
                width={18}
                height={16}
                rx={2}
            />
            <Line
                x1={12}
                y1={4}
                x2={12}
                y2={20}
            />
        </Svg>
    );
}
