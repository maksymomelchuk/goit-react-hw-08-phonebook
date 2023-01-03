import { useDispatch } from 'react-redux';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';

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
        <AiOutlineUser />
        <StyledInput type="email" name="email" placeholder="Email" />
      </StyledLabel>
      <StyledLabel>
        <AiOutlineMail />
        <StyledInput type="password" name="password" placeholder="Password" />
      </StyledLabel>
      <StyledButton type="submit">Log In</StyledButton>
    </StyledForm>
  );
};
