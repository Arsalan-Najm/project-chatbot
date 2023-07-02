import '../styles/globals.css';
import { Tajawal } from 'next/font/google';
import { Provider, NavBar } from '@/components';
const tajawal = Tajawal({ subsets: ['latin'], weight: ['200', '300', '400', '500', '700', '800', '900'] });
import { ContextProvider } from '@/context/AppContext';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`main bg-black ${tajawal.className}`}>
        <Provider>
          <ContextProvider>
            <div className='relative overflow-hidden lg:overflow-visible'>
              <NavBar />
              {children}
            </div>
          </ContextProvider>
        </Provider>
      </body>
    </html>
  );
}
