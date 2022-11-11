import {
  CheckCircleIcon,
  CheckIcon,
  CircleIconButton,
  DropDownList,
  Logo,
  LogoutIcon,
  OutlinedSettingsIcon,
  PlusIcon,
  ProfileIcon,
  ProfilePicWithDropdown,
  SearchInput,
  SecondaryBtn,
} from '../../components';
import { User } from '../../types';

interface Props {
  user: User;
}

const VisitsTopbar = ({ user }: Props) => {
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
      <div className='hidden lg:block'>
        <h1 className='text-app_text2 text-lg'>Record Visitors</h1>
      </div>
      <div className='hidden lg:block grow' />
      <div className='hidden lg:flex'>
        <SearchInput />
        <SecondaryBtn
          classes='normal-case ml-3 border-app_primary bg-white hover:bg-app_bg2'
          text='Visitors for today'
          dropdownClases='dropdown-end'
          icon={<CheckCircleIcon />}
        >
          <DropDownList>
            <li>
              <a>
                <span className={``}>
                  <CheckIcon />
                </span>
                <span className='ml-1'>Today</span>
              </a>
            </li>
            <li>
              <a>
                <span className={`invisible`}>
                  <CheckIcon />
                </span>
                <span className='ml-1'>Yesterday</span>
              </a>
            </li>
            <li>
              <a>
                <span className={`invisible`}>
                  <CheckIcon />
                </span>
                <span className='ml-1'>Select date</span>
              </a>
            </li>
          </DropDownList>
        </SecondaryBtn>
        <CircleIconButton
          classes='ml-3 border-app_primary bg-white hover:bg-app_bg2'
          icon={<PlusIcon />}
        />
      </div>
      <div className='ml-3'>
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

export default VisitsTopbar;
