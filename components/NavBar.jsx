'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { navbarVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BiMenu } from 'react-icons/bi';
import { useApp } from '@/context/AppContext';
const NavBar = () => {
  const { data: session, status } = useSession();
  const { toggle, setToggle } = useApp();
  return (
    <header className='relative z-50'>
      <motion.nav
        initial='hidden'
        whileInView='show'
        variants={navbarVariants}
        className={`2xl:max-w-[1280px] w-full flex justify-between items-center gap-8 mx-auto sm:p-8 xs:p-8 px-6 py-4 ${
          session && status === 'authenticated'
            ? '2xl:max-w-full bg-main-200 drop-shadow-sm'
            : 'absolute left-0 right-0'
        }`}
      >
        <h3 className='text-sub-100 font-extrabold text-[24px] sm:text-4xl'>GamePedia</h3>
        {session?.user.name ? (
          <div className='flex gap-4'>
            <button
              className='hidden lg:block px-4 py-2 rounded-full text-sub-100 bg-main-100 drop-shadow-sm font-medium hover:bg-opacity-50'
              onClick={() => signOut()}
            >
              Sign Out
            </button>
            <Image
              src={session?.user.image}
              width={40}
              height={40}
              alt='Profile'
              className='rounded-full'
              title={`logged in as ${session?.user.email}`}
            />
            <button
              className='lg:hidden text-sub-100  rounded-full bg-main-200 w-10 h-10'
              onClick={() => setToggle(!toggle)}
            >
              <BiMenu className='scale-[2] m-auto' />
            </button>
          </div>
        ) : (
          <button
            className='px-4 py-2 rounded-full text-sub-100 bg-main-100 drop-shadow-sm font-medium hover:bg-opacity-50'
            onClick={() => signIn('google')}
          >
            Sign In
          </button>
        )}
      </motion.nav>
    </header>
  );
};

export default NavBar;
