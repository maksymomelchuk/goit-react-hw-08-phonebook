import { useDispatch } from 'react-redux';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
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
        <AiOutlineUser />
        <StyledInput type="text" name="name" placeholder="Username" />
      </StyledLabel>
      <StyledLabel>
        <AiOutlineMail />
        <StyledInput type="email" name="email" placeholder="Email" />
      </StyledLabel>
      <StyledLabel>
        <RiLockPasswordLine />
        <StyledInput type="password" name="password" placeholder="Password" />
      </StyledLabel>
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
};
