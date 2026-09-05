import Svg, { Circle, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function BallIcon() {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.teal700}
            strokeWidth={1.8}
        >
            <Circle
                cx={12}
                cy={12}
                r={9}
            />
            <Path
                d="M4.5 7c3 2 3 8 0 10M19.5 7c-3 2-3 8 0 10"
                strokeLinecap="round"
            />
        </Svg>
    );
}
