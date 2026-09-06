import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function HomeIcon() {
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
            <Path d="M3 11l9-7 9 7" />
            <Path d="M5 10v10h14V10" />
        </Svg>
    );
}
