import { useAuth } from 'hooks/useAuth';
import { StyledNavLink } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav style={{ display: 'flex', gap: 30 }}>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </nav>
  );
};
