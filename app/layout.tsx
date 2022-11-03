import './globals.css';
import { ReactNode } from 'react';
import TopBar from './topbar';
import Nav from './nav';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head lang='en'>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Visitors Log app' />
        <title>Visitors Log</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='font-body bg-app_bg1 p-5'>
        <header>
          <TopBar />
          {/* <Nav /> */}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
