import Svg, { Circle, Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function EyeIcon() {
    return (
        <Svg
            width={19}
            height={19}
            viewBox="0 0 24 24"
            fill="none"
            stroke={Colors.gray500}
            strokeWidth={1.9}
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
            <Circle
                cx={12}
                cy={12}
                r={3}
            />
        </Svg>
    );
}
