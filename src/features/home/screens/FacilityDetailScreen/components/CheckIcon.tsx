import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function CheckIcon() {
    return (
        <Svg
            width={12}
            height={12}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.slate600}
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M4 12l5 5L20 6" />
        </Svg>
    );
}
