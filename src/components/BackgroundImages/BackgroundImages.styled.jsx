import styled from '@emotion/styled';

export const StyledBgImages = styled.div`
  display: flex;
  gap: 5px;

  position: relative;

  &::after {
    content: '';
    width: 60px;
    height: 2px;
    background-color: white;
    border-radius: 10px;

    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StyledTopTime = styled.p`
  color: black;
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  padding: 0px;
`;

export const StyledDivWithTimeAndIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 25px;
  left: 50px;
  width: 285px;
`;

export const StyledBgWhite = styled.div`
  background-color: white;
  border-radius: 40px;

  position: absolute;
  top: 10px;
  left: 10px;
  bottom: 10px;
  right: 10px;

  z-index: -1;
`;
