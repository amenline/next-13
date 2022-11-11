import {
  DropDownList,
  Logo,
  LogoutIcon,
  Notification,
  OutlinedSettingsIcon,
  Profile,
  ProfileIcon,
  ProfilePicWithDropdown,
  SearchInput,
} from '../components';
import { User } from '../types';

interface Props {
  user: User;
}

const TopBar = ({ user }: Props) => {
  return (
    <div className='flex py-2 px-4 items-center'>
      <label
        htmlFor='my-drawer-2'
        className='btn btn-outline btn-circle drawer-button lg:hidden text-app_primary_dark'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h7'
          />
        </svg>
      </label>
      <div className='grow lg:hidden' />
      {/* <div className='lg:hidden'>
        <Logo />
      </div> */}
      <div className='hidden lg:block'>
        <h1 className='text-app_text2 text-lg'>Hi, {user.fullname}</h1>
      </div>
      <div className='hidden lg:block grow' />
      <div className='hidden lg:block'>
        <SearchInput />
      </div>
      {/* <div className='hidden lg:block ml-5'>
        <Notification />
      </div> */}
      <div className='hidden lg:block ml-5'>
        <Profile user={user} />
      </div>
      <div className='lg:hidden'>
        <ProfilePicWithDropdown user={user}>
          <DropDownList>
            <li>
              <a>
                <span>
                  <ProfileIcon />
                </span>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a>
                <span>
                  <OutlinedSettingsIcon />
                </span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a>
                <span>
                  <LogoutIcon />
                </span>
                <span>Logout</span>
              </a>
            </li>
          </DropDownList>
        </ProfilePicWithDropdown>
      </div>
    </div>
  );
};

export default TopBar;
