import { StyleSheet } from 'react-native';
import Svg, { Circle, Line, Rect } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function CourtLinesBackdrop() {
    return (
        <Svg
            style={StyleSheet.absoluteFill}
            width="100%"
            height="100%"
            viewBox="0 0 390 473"
            preserveAspectRatio="xMidYMid slice"
        >
            <Rect
                x={35}
                y={60}
                width={320}
                height={200}
                rx={10}
                fill="none"
                stroke={Colors.whiteOverlay22}
                strokeWidth={3}
            />
            <Line
                x1={195}
                y1={60}
                x2={195}
                y2={260}
                stroke={Colors.whiteOverlay22}
                strokeWidth={3}
            />
            <Circle
                cx={195}
                cy={160}
                r={34}
                fill="none"
                stroke={Colors.whiteOverlay22}
                strokeWidth={3}
            />
            <Rect
                x={35}
                y={60}
                width={60}
                height={200}
                fill="none"
                stroke={Colors.whiteOverlay14}
                strokeWidth={3}
            />
            <Rect
                x={295}
                y={60}
                width={60}
                height={200}
                fill="none"
                stroke={Colors.whiteOverlay14}
                strokeWidth={3}
            />
        </Svg>
    );
}
