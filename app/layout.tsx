import '../styles/globals.css';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head>
        <title>Visitors Log</title>
        <meta name='description' content='Visitors Log app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='font-body'>{children}</body>
    </html>
  );
};

export default RootLayout;
