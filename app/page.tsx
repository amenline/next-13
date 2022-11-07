import { NavItem } from '../components';
import { User } from '../types';
import TopBar from './topbar';

const Page = () => {
  const user: User = {
    fullname: 'Alicia Keys',
    email: 'alicia@krucialkeys.com',
  };

  return (
    <>
      <TopBar user={user} />
      Dashboard contents
    </>
  );
};

export default Page;
