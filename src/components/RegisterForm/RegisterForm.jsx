import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

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
    <form autoComplete="off" onSubmit={handlerSubmit}>
      <label>
        Username
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
