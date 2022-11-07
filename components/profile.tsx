import { User } from '../types';
import { Avatar } from './avatar';

interface Props {
  user: User;
}

export const Profile = ({ user }: Props) => {
  const { picture, fullname, email } = user;

  return (
    <div className='flex items-center'>
      <Avatar imagesrc={picture} letter={fullname ? fullname[0] : ''} />
      <div className='ml-2'>
        <div className='text-xl font-medium text-app_text2'>
          {fullname && fullname}
        </div>
        <div className='text-app_text1'>{email && email}</div>
      </div>
    </div>
  );
};
