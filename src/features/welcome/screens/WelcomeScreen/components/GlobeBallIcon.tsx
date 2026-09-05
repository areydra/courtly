import Svg, { Circle, G, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function GlobeBallIcon() {
    return (
        <Svg
            width={32}
            height={32}
            viewBox="0 0 24 24"
        >
            <Circle
                cx={12}
                cy={12}
                r={9}
                fill={Colors.teal700}
            />
            <G
                fill="none"
                stroke={Colors.cream50}
                strokeWidth={1.4}
                strokeLinecap="round"
            >
                <Path d="M12 3v18" />
                <Path d="M3 12h18" />
                <Path d="M5.8 6.2c2 2.2 2 9.4 0 11.6" />
                <Path d="M18.2 6.2c-2 2.2-2 9.4 0 11.6" />
            </G>
        </Svg>
    );
}
