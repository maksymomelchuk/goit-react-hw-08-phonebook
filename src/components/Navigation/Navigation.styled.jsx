import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  align-items: center;
  gap: 215px;

  &:hover + .hidden {
    display: flex;
    justify-content: space-between;
    width: 300px;
    position: absolute;
    bottom: 30px;
    left: 40px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: inherit;
  padding: 5px;

  &.active {
    font-weight: 700;
    color: #dee1e6;
  }
`;
