import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: inherit;

  &.active {
    font-weight: 700;
    color: #dee1e6;
  }
`;
