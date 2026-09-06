import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function CancelIcon() {
    return (
        <Svg
            width={28}
            height={28}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.red700}
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M6 6l12 12M18 6L6 18" />
        </Svg>
    );
}
