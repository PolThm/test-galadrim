import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconCheckCircle = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      style={{elevation: 0.1}}>
      <Path
        fill="#009EFF"
        d="M14 7A7 7 0 110 7a7 7 0 0114 0zm-7.81 3.706l5.194-5.193a.453.453 0 000-.639l-.639-.638a.45.45 0 00-.638 0L5.87 8.47 3.893 6.494a.45.45 0 00-.638 0l-.639.638a.453.453 0 000 .639l2.936 2.935a.45.45 0 00.638 0z"
        filter="url(#prefix__a)"
        opacity={0.8}
      />
      <Path fill="#009EFF" d="M14 7A7 7 0 110 7a7 7 0 0114 0z" />
      <Path
        fill="#FFF"
        d="M6.283 10.863l4.6-5.398a.53.53 0 000-.664l-.566-.664a.36.36 0 00-.566 0L6 8.54 4.249 6.484a.36.36 0 00-.566 0l-.566.664a.53.53 0 000 .664l2.6 3.05a.36.36 0 00.566 0z"
      />
    </Svg>
  );
};

export default IconCheckCircle;
