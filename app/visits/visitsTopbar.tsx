import { Logo, ProfilePicWithDropdown, SearchInput } from '../../components';
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
      <div className='lg:hidden'>
        <Logo />
      </div>
      <div className='hidden lg:block'>
        <h1 className='text-app_text2 text-lg'>Hi, {user.fullname}</h1>
      </div>
      <div className='hidden lg:block grow' />
      <div className='hidden lg:block'>
        <SearchInput />
      </div>
      <div className='hidden lg:block ml-5'>
        <ProfilePicWithDropdown user={user}>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </ProfilePicWithDropdown>
      </div>
      <div className='dropdown dropdown-end lg:hidden'>
        <label tabIndex={0} className='btn btn-ghost btn-circle'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              ></path>
            </svg>
          </button>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-app_menu rounded-box w-52 text-app_text2'
        >
          <li>
            <span>Profile</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
          <li>
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VisitsTopbar;
