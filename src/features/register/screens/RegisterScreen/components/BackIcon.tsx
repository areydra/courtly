import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function BackIcon() {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.ink900}
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M15 18l-6-6 6-6" />
        </Svg>
    );
}
