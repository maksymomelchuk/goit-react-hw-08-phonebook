import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { StyledButton } from 'components/Phonebook/ContactForm.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  return (
    isLoggedIn && (
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <p style={{ margin: 0, fontWeight: 600 }}>{user.name}</p>
        <StyledButton type="button" onClick={() => dispatch(logOut())}>
          Logout
        </StyledButton>
      </div>
    )
  );
};
