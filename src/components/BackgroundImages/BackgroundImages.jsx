import {
  StyledBgImages,
  StyledTopTime,
  StyledDivWithTimeAndIcons,
  StyledBgWhite,
} from './BackgroundImages.styled';
import { TbAntennaBars5 } from 'react-icons/tb';
import { IoIosWifi, IoIosBatteryFull } from 'react-icons/io';
import { Time } from 'components/Time/Time';

const style = { color: 'black', fontSize: 22 };

export const BackgroundImages = () => {
  return (
    <>
      <StyledBgWhite />
      <StyledDivWithTimeAndIcons>
        <StyledTopTime>
          <Time />
        </StyledTopTime>
        <StyledBgImages>
          <TbAntennaBars5 style={style} />
          <IoIosWifi style={style} />
          <IoIosBatteryFull style={style} />
        </StyledBgImages>
      </StyledDivWithTimeAndIcons>
    </>
  );
};
