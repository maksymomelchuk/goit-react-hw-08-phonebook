import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  &:hover + .hidden {
    display: block;

    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
`;
