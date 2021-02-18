import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconStar = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={19}
      viewBox="0 0 20 19">
      <Path
        fill="#009EFF"
        fillRule="evenodd"
        d="M9.5 0L7 6.5H0l5 5-1.5 7 6-4 6.5 4-2-7 5.5-5h-7z"
      />
    </Svg>
  );
};

export default IconStar;
