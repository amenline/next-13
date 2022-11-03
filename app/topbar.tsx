import { Logo, Notification, Profile, SearchInput } from '../components';

const TopBar = () => {
  return (
    <div>
      <Logo />
      <h1>Hi, Alicia Keys</h1>
      <SearchInput />
      <Notification />
      <Profile />
    </div>
  );
};

export default TopBar;
