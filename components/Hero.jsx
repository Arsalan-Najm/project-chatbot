'use client';
import Image from 'next/image';
import HeroImage from '../public/bg.webp';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { containerVariant, textVariant, slideIn } from '@/utils/motion';
const Hero = () => {
  return (
    <section className='sm:py-16 xs:py-8 py-12'>
      <motion.div
        variants={containerVariant}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        <motion.h1
          variants={textVariant(1.1)}
          className='text-center uppercase text-sub-100  md:text-[100px] sm:text-[60px] text-[44px] font-bold leading-[64px] sm:leading-[112px] z-10'
        >
          <span>
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#cb6573] to-[#2a52be]'>Howdy!</span>{' '}
            I am here
          </span>
          <br />
          <span>to </span>
          <TypeAnimation
            sequence={['Help', 1000, 'Support', 1000, 'Assist', 1000, 'Help', 1000]}
            repeat={Infinity}
            cursor={false}
            wrapper='span'
            className='text-transparent bg-clip-text bg-gradient-to-br from-[#cb6573] to-[#2a52be]'
          />
          <span> You</span>
        </motion.h1>
        <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='relative w-full md:-mt-[20px] -mt-[12px]'>
          <div className='absolute w-full h-[300px] bg-gradient-to-br from-main-100 to-[#2a52be] rounded-tl-[140px] z-[0] -top-[30px]'></div>
          <Image
            src={HeroImage}
            className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
          />
        </motion.div>
      </motion.div>
      <div className='h-12'></div>
    </section>
  );
};

export default Hero;
