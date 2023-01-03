import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <header
      style={{
        display: 'flex',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Navigation />
      <UserMenu />
      <AuthNav />
    </header>
  );
};
