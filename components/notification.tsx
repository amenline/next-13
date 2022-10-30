import { Indicator } from './indicator';

interface Props {
  indicator?: string | number;
}

const BellIcon = ({ classes = '' }: { classes?: string }) => (
  <button
    // className={`bg-white p-4 w-fit rounded-3xl border-app_primary border border-solid ${classes}`}
    className={`btn bg-white h-fit p-4 w-fit rounded-3xl border-app_primary border border-solid ${classes}`}
  >
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='#777C7C'
      className='w-10 h-10'
    >
      <path
        fillRule='evenodd'
        d='M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z'
        clipRule='evenodd'
      />
    </svg>
  </button>
);

export const Notification = ({ indicator }: Props) => {
  if (indicator === undefined) {
    return <BellIcon />;
  } else {
    return (
      <div className='indicator'>
        <Indicator text={indicator} />
        <BellIcon classes='grid' />
      </div>
    );
  }
};
