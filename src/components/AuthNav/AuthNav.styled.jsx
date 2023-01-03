import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: inherit;
  background-color: rgba(111, 112, 115, 0.5);
  border-radius: 50%;
  padding: 5px;

  &.active {
    font-weight: 700;
    color: #dee1e6;
    background-color: rgba(111, 112, 115, 0.8);
  }
`;

export const StyledContainerDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 290px;

  position: absolute;
  bottom: 40px;
  left: 40px;

  &:hover + .hidden {
    display: flex;
    gap: 190px;
    justify-content: center;

    position: absolute;
    bottom: 100px;
    left: 45px;
  }
`;
