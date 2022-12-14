import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from 'components/Phonebook/ContactForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handlerSubmit = event => {
    event.preventDefault();
    const { email, name, password } = event.currentTarget.elements;
    dispatch(
      signUp({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handlerSubmit}>
      <StyledLabel>
        Username
        <StyledInput type="text" name="name" />
      </StyledLabel>
      <StyledLabel>
        Email
        <StyledInput type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <StyledInput type="password" name="password" />
      </StyledLabel>
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};
