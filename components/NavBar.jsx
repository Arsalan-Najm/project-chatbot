'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { navbarVariants } from '@/utils/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
const NavBar = () => {
  const { data: session } = useSession();
  return (
    <motion.nav initial='hidden' whileInView='show' variants={navbarVariants} className='sm:px-16 px-6 py-8 relative '>
      <div className='2xl:max-w-[1280px] w-full flex justify-between items-center gap-8 mx-auto'>
        <h3 className='text-sub-100 font-extrabold text-[24px] sm:text-4xl'>ChitChat</h3>
        {session?.user.name ? (
          <div className='flex gap-4'>
            <button
              className='px-4 py-2 rounded-full text-sub-100 bg-main-100 drop-shadow-sm font-medium hover:bg-opacity-50'
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
          </div>
        ) : (
          <button
            className='px-4 py-2 rounded-full text-sub-100 bg-main-100 drop-shadow-sm font-medium hover:bg-opacity-50'
            onClick={() => signIn('google')}
          >
            Sign In
          </button>
        )}
      </div>
      <div className='h-8'></div>
    </motion.nav>
  );
};

export default NavBar;
