'use client';
import Image from 'next/image';
import Map from '../public/map.webp';
import AfgFlag from '../public/afg.webp';
import UsaFlag from '../public/usa.webp';
import QatarFlag from '../public/qatar.webp';
import { motion } from 'framer-motion';
import { containerVariant, fadeIn } from '@/utils/motion';
import { TypeAnimation } from 'react-type-animation';
const World = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
      <motion.div
        variants={containerVariant}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
      >
        <p className='font-normal text-xl sm:text-2xl text-sub-200 text-center'>
          <TypeAnimation
            sequence={['|', 1000, ' Connect From Anywhere', 1000]}
            repeat={Infinity}
            cursor={true}
            wrapper='span'
          />
        </p>
        <h2 className='mt-2 font-bold text-5xl sm:text-7xl text-sub-100 text-center'>
          No Limitation, Effortlessly Connect and Collaborate with Your AI Buddy.
        </h2>
        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className='relative mt-[68px] flex w-full h-[550px]'>
          <Image src={Map} className='w-full h-full object-cover' />
          <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#031320]'>
            <Image src={AfgFlag} className='w-full h-full object-cover rounded-full' />
          </div>
          <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#031320]'>
            <Image src={UsaFlag} className='w-full h-full object-cover rounded-full' />
          </div>
          <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#031320]'>
            <Image src={QatarFlag} className='w-full h-full object-fill rounded-full' />
          </div>
        </motion.div>
      </motion.div>
      <div className='h-12'></div>
    </section>
  );
};

export default World;
