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
      <div className='p-2 bg-app_bg2'>
        <div className='grow'>Dashboard contents</div>
      </div>
    </>
  );
};

export default Page;
