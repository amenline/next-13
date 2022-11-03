'use client';

const Error = ({ error }: any) => {
  return <div>{error.message ? error.message : 'Sorry an error occured!'}</div>;
};

export default Error;
