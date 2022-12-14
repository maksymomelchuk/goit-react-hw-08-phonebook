import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from 'components/Phonebook/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    dispatch(logIn({ email: email.value, password: password.value }));
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <StyledButton type="submit">Log In</StyledButton>
    </StyledForm>
  );
};
