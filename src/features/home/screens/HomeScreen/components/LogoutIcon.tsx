import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function LogoutIcon() {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.red700}
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
            <Path d="M16 17l5-5-5-5" />
            <Path d="M21 12H9" />
        </Svg>
    );
}
