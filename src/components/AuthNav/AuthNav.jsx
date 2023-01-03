import { useAuth } from 'hooks/useAuth';
import { StyledNavLink, StyledContainerDiv } from './AuthNav.styled';
import { TbLetterR, TbLetterL } from 'react-icons/tb';

const style = { fontSize: 40 };

export const AuthNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    !isLoggedIn && (
      <>
        <StyledContainerDiv>
          <StyledNavLink to="/register">
            <TbLetterR style={style} />
          </StyledNavLink>
          <StyledNavLink to="/login">
            <TbLetterL style={style} />
          </StyledNavLink>
        </StyledContainerDiv>
        <div className="hidden">
          <span>Login</span>
          <span>Register</span>
        </div>
      </>
    )
  );
};
