import { User } from '../types';
import { Avatar, AvatarWithLabel } from './avatar';

interface ProfileProps {
  user: User;
}

interface PicOnlyProfileProps extends ProfileProps {
  children: React.ReactNode;
}

export const Profile = ({ user }: ProfileProps) => {
  const { picture, fullname, email } = user;

  return (
    <div className='flex items-center'>
      <Avatar imagesrc={picture} letter={fullname ? fullname[0] : ''} />
      <div className='ml-2'>
        <div className='text-lg font-medium text-app_text2'>
          {fullname && fullname}
        </div>
        <div className='text-app_text1 text-sm'>{email && email}</div>
      </div>
    </div>
  );
};

export const ProfilePicWithDropdown = ({
  user,
  children,
}: PicOnlyProfileProps) => {
  const { picture, fullname, email } = user;

  return (
    <div className='dropdown dropdown-end'>
      <AvatarWithLabel
        imagesrc={picture}
        letter={fullname ? fullname[0] : ''}
      />
      {children}
    </div>
  );
};
