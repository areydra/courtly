import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function CloseIcon() {
    return (
        <Svg
            width={14}
            height={14}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.ink900}
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M6 6l12 12M18 6L6 18" />
        </Svg>
    );
}
