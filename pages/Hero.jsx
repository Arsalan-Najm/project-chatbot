'use client';
import Image from 'next/image';
import HeroImage from '../public/bg-2.webp';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { containerVariant, textVariant, slideIn } from '@/utils/motion';
const Hero = () => {
  return (
    <div className='relative text-center min-h-[30rem] md:min-h-[43rem] h-full pt-[7.5rem] pb-[2rem] px-0'>
      <div className='absolute top-0 left-0 w-full h-full bg-sub-100'>
        <div className='relative overflow-hidden w-full h-full'>
          <Image src={HeroImage} className='h-full w-full object-cover brightness-[0.2]' />
        </div>
      </div>
      <div className='m-auto max-w-[1128px] flex flex-col items-center text-center'>
        <div className='sm:h-20'></div>
        <div className='w-full flex flex-col z-50 gap-5 p-3'>
          <h1 className='text-3xl sm:text-5xl md:text-7xl font-semibold text-sub-100'>
            Discover the Ultimate Game Encyclopedia Unleash Your Gaming Knowledge
          </h1>
          <p className='text-lg sm:text-2xl text-sub-100'>
            Unlock a universe of over 50,000+ video games, spanning every platform, ready to be explored at your
            fingertips.
          </p>
          <p className='text-lg sm:text-2xl text-sub-100'>
            Discover limitless gaming genres, from action to arcade and beyond. Start today with your account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
