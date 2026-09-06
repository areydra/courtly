import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';

export default function StarIcon() {
    return (
        <Svg
            width={13}
            height={13}
            viewBox="0 0 24 24"
            fill={Colors.amber500}
            stroke="none"
        >
            <Path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7-5.4-4.7 7.1-.6z" />
        </Svg>
    );
}
