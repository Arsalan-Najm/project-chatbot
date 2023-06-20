'use client';
import { motion } from 'framer-motion';
import { fadeIn, containerVariant } from '@/utils/motion';
import { BsArrowDown } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
const About = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
      <motion.div
        initial='hidden'
        whileInView='show'
        variants={containerVariant}
        viewport={{ once: false, amount: 0.25 }}
        className='2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col'
      >
        <p className='font-normal text-xl sm:text-2xl text-sub-200 text-center'>
          <TypeAnimation
            sequence={['|', 1000, ' About GamePedia', 1000]}
            repeat={Infinity}
            cursor={true}
            wrapper='span'
          />
        </p>
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className='mt-[8px] font-normal text-[20px] sm:text-[32px] text-center text-sub-100'
        >
          Welcome to GamePedia, the ultimate web-app for all your video game information needs! With GamePedia, you can
          effortlessly explore and discover detailed information about any video game across all platforms. From popular
          titles to hidden gems, GamePedia provides comprehensive details, including game summaries, genres, release
          dates, developer information, and much more.
        </motion.p>
        <BsArrowDown className='text-sub-200 mt-7 scale-[2]' />
      </motion.div>
      <div className='h-6'></div>
    </section>
  );
};

export default About;
