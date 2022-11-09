'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  Logo,
  LogoutIcon,
  PatientsIcon,
  NavItem,
  SettingsIcon,
  VisitsIcon,
} from '../components';

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className='drawer-side'>
      <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
      <ul className='menu p-4 w-80 bg-app_bg1'>
        <Link href={'/'} className='mb-32'>
          <Logo />
        </Link>
        <NavItem
          title='Dashboard'
          icon={<HomeIcon />}
          link='/'
          selected={pathname == '/'}
        />
        <NavItem
          title='Patients'
          icon={<PatientsIcon />}
          link='/patients'
          selected={pathname == '/patients'}
        />
        <NavItem
          title='Visits'
          icon={<VisitsIcon />}
          link='/visits'
          selected={pathname == '/visits'}
        />
        <div className='flex grow'></div>
        <hr className='border-gray-400 mb-2' />
        <NavItem
          title='Settings'
          icon={<SettingsIcon />}
          link='/settings'
          selected={pathname == '/settings'}
        />
        <NavItem title='Logout' icon={<LogoutIcon />} />
      </ul>
    </nav>
  );
};

export default Nav;
