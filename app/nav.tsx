import Link from 'next/link';
import {
  HomeIcon,
  Logo,
  LogoutIcon,
  MembersIcon,
  NavItem,
  SettingsIcon,
  VisitorsIcon,
} from '../components';

const Nav = () => {
  return (
    <nav className='drawer-side'>
      <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
      <ul className='menu p-4 w-80 bg-app_bg1'>
        <Link href={'/'} className='mb-32'>
          <Logo />
        </Link>
        <NavItem title='Dashboard' icon={<HomeIcon />} selected />
        <NavItem title='Members' icon={<MembersIcon />} />
        <NavItem title='Visitors' icon={<VisitorsIcon />} alertIndicator={3} />
        <div className='flex grow'></div>
        <hr className='border-gray-400 mb-2' />
        <NavItem title='Settings' icon={<SettingsIcon />} />
        <NavItem title='Logout' icon={<LogoutIcon />} />
      </ul>
    </nav>
  );
};

export default Nav;
