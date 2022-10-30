import Image from 'next/image';

interface Props {
  imagesrc: string;
  letter: string;
}

export const Avatar = ({ imagesrc, letter }: Props) => {
  if (imagesrc !== '') {
    return (
      <div className='avatar'>
        <div className='w-24 rounded-3xl bg-black object-contain'>
          <Image src={imagesrc} width={100} height={100} alt='profile image' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='avatar placeholder'>
        <div className='bg-app_primary text-white font-bold rounded-3xl w-24'>
          <span className='text-3xl'>{letter}</span>
        </div>
      </div>
    );
  }
};
