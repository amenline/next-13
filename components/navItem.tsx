import { ReactNode } from 'react';
import Link from 'next/link';
import { Indicator } from './indicator';

interface Props {
  link?: string;
  selected?: boolean;
  icon: ReactNode;
  title: string;
  alertIndicator?: string | number;
}

export const NavItem = ({
  link,
  selected = false,
  icon,
  title,
  alertIndicator,
  ...otherProps
}: Props) => {
  const NavButton = () => (
    <button
      className={`btn border-none btn-active normal-case text-lg flex items-center justify-start !rounded-2xl p-2 ${
        selected
          ? 'bg-app_primary hover:bg-app_primary_dark'
          : 'bg-app_bg1 hover:bg-app_bg1 hover:border hover:border-solid hover:border-bg-app_text1 active:text-app_text1'
      }`}
      {...otherProps}
    >
      <div className='ml-5'>{icon && icon}</div>
      <div className='ml-5'>{title}</div>
      <div className='ml-5 grow'>
        {alertIndicator && <Indicator text={alertIndicator} />}
      </div>
    </button>
  );

  return (
    <li className={`${selected ? 'text-white' : 'text-app_text1'} mb-1 p-2`}>
      {link ? (
        <Link href='/'>
          <NavButton />
        </Link>
      ) : (
        <NavButton />
      )}
    </li>
  );
};
