import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function CheckCircleIcon() {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.teal700}
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M20 6L9 17l-5-5" />
        </Svg>
    );
}
