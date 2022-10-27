import '../styles/globals.css';
import { ReactNode } from 'react';
import TopBar from './topbar';
import Nav from './nav';

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
      <body className='font-body'>
        <TopBar />
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
