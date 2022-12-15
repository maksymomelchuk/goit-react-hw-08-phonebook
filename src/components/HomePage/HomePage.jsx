import { useAuth } from 'hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        {isLoggedIn
          ? `${user.name}, have a nice day!`
          : 'Sign up or login to start'}
      </h1>
    </>
  );
};
