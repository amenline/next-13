import './globals.css';
import { ReactNode } from 'react';
import Nav from './nav';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Visitors Log app' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='font-body bg-app_bg1'>
        <div className='drawer drawer-mobile'>
          <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
          <div className='drawer-content'>
            <main>{children}</main>
          </div>
          <Nav />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
