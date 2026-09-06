import Svg, { Line, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function AlertIcon() {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.red600}
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M12 9v4" />
            <Line
                x1={12}
                y1={16.5}
                x2={12}
                y2={16.51}
            />
            <Path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        </Svg>
    );
}
