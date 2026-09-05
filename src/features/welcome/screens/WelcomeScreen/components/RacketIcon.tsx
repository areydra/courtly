import Svg, { Ellipse, Line, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function RacketIcon() {
    return (
        <Svg
            width={30}
            height={30}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.teal700}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Ellipse
                cx={10.5}
                cy={8}
                rx={6.2}
                ry={7.2}
                strokeWidth={1.8}
            />
            <Line
                x1={10.5}
                y1={2.3}
                x2={10.5}
                y2={13.7}
                strokeWidth={1.2}
            />
            <Line
                x1={5.6}
                y1={8}
                x2={15.4}
                y2={8}
                strokeWidth={1.2}
            />
            <Path
                d="M15 12.5l6.8 6.8"
                strokeWidth={2.6}
            />
        </Svg>
    );
}
