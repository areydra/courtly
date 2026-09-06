import Svg, { Circle, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function SearchIcon() {
    return (
        <Svg
            width={17}
            height={17}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.gray500}
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Circle
                cx={11}
                cy={11}
                r={7}
            />
            <Path d="M21 21l-4-4" />
        </Svg>
    );
}
