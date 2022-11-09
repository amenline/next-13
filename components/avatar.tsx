import Image from 'next/image';
import React from 'react';

interface Props {
  imagesrc?: string;
  letter: string;
  round?: boolean;
}

export const Avatar = ({ imagesrc, letter, round = false }: Props) => {
  if (imagesrc !== undefined) {
    return (
      <div className='avatar'>
        <div
          className={`w-24 ${
            round ? 'rounded-full' : 'rounded-3xl'
          } bg-black object-contain`}
        >
          <Image src={imagesrc} width={100} height={100} alt='profile image' />
        </div>
      </div>
    );
  } else {
    return (
      <div className='avatar placeholder'>
        <div
          className={`bg-app_primary text-white font-bold ${
            round ? 'rounded-full' : 'rounded-2xl'
          } w-16`}
        >
          <span className='text-3xl'>{letter}</span>
        </div>
      </div>
    );
  }
};

export const AvatarWithLabel = ({ imagesrc, letter, round = true }: Props) => {
  if (imagesrc !== undefined) {
    return (
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div
          className={`w-12 ${
            round ? 'rounded-full' : 'rounded-3xl'
          } bg-black object-contain`}
        >
          <Image src={imagesrc} width={100} height={100} alt='profile image' />
          {/* <img src='https://placeimg.com/80/80/people' /> */}
        </div>
      </label>
    );
  } else {
    return (
      <label
        tabIndex={0}
        className='btn btn-ghost btn-circle avatar placeholder'
      >
        <div
          className={`bg-app_primary text-white font-bold ${
            round ? 'rounded-full' : 'rounded-2xl'
          } w-12`}
        >
          <span className='text-2xl'>{letter}</span>
        </div>
      </label>
    );
  }
};
