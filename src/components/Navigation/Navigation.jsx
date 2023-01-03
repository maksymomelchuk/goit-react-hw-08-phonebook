import { useAuth } from 'hooks/useAuth';
import { StyledNav, StyledNavLink } from './Navigation.styled';
import { IoIosContact, IoIosHome } from 'react-icons/io';

const style = { fontSize: 30 };

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    isLoggedIn && (
      <>
        <StyledNav>
          <StyledNavLink to="/">
            <IoIosHome style={style} />
          </StyledNavLink>
          <StyledNavLink to="/contacts">
            <IoIosContact style={style} />
          </StyledNavLink>
        </StyledNav>
        <div className="hidden">
          <span>Home</span>
          <span>Contacts</span>
        </div>
      </>
    )
  );
};
