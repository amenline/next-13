import { Avatar } from './avatar';

interface Props {
  picture?: string;
  fullname?: string;
  email?: string;
}

export const Profile = ({ picture = '', fullname, email }: Props) => {
  return (
    <div className='flex items-center'>
      <Avatar imagesrc={picture} letter={fullname ? fullname[0] : ''} />
      <div className='ml-2'>
        <div className='text-3xl font-medium text-app_text2'>
          {fullname && fullname}
        </div>
        <div className='text-app_text1'>{email && email}</div>
      </div>
    </div>
  );
};
