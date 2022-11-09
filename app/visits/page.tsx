import { User } from '../../types';
import VisitsTopbar from './visitsTopbar';

const Page = () => {
  const user: User = {
    fullname: 'Alicia Keys',
    email: 'alicia@krucialkeys.com',
  };

  return (
    <>
      <header className='bg-app_bg1'>
        <VisitsTopbar user={user} />
      </header>
      <div className='p-2 pl-4'>This is the Visits Page</div>
    </>
  );
};

export default Page;
