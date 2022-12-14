import { User } from '../types';
import TopBar from './topbar';

const Page = () => {
  const user: User = {
    fullname: 'Alicia Keys',
    email: 'alicia@krucialkeys.com',
  };

  return (
    <>
      <header className='bg-app_bg1'>
        <TopBar user={user} />
      </header>
      <div className='p-2 pl-4'>
        <div>Dashboard contents</div>
      </div>
    </>
  );
};

export default Page;
