import { useAuth } from 'hooks/useAuth';
import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    !isLoggedIn && (
      <div style={{ display: 'flex', gap: 20 }}>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Log in</StyledNavLink>
      </div>
    )
  );
};
