import { EllipsisLoader } from '../components';

const Loading = () => {
  return (
    <div className='flex h-4/5 items-center justify-center'>
      <EllipsisLoader color='#58AFAF' />
    </div>
  );
};

export default Loading;
