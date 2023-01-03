import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { StyledContainer, StyledButton } from './UserMenu.styled';
import { CiLogout } from 'react-icons/ci';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn && (
      <>
        <StyledContainer>
          <StyledButton type="button" onClick={() => dispatch(logOut())}>
            <CiLogout style={{ fontSize: 30 }} />
          </StyledButton>
        </StyledContainer>
        <div className="hidden">
          <span>Logout</span>
        </div>
      </>
    )
  );
};
