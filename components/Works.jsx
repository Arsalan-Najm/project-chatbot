'use client';
import { motion } from 'framer-motion';
import { containerVariant, fadeIn } from '@/utils/motion';
import WorksImage from '../public/ai.webp';
import Image from 'next/image';
const HowItWorks = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
      <motion.div
        variants={containerVariant}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'
      >
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className='flex-1 flex justify-center items-center'>
          <Image src={WorksImage} className='w-[90%] h-[90%] object-contain' />
        </motion.div>
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className='flex-[0.75] flex justify-center flex-col'>
          <p className='font-normal text-xl text-sub-200'>
            <span>| How ChitChat works?</span>
          </p>
          <h2 className='mt-2 font-bold text-5xl sm:text-7xl text-sub-100'>Get started with just a few clicks</h2>
          <div className='mt-8 flex flex-col gap-6 max-w-sm'>
            <div className='flex justify-center items-center flex-row'>
              <div className='flex justify-center items-center w-[70px] h-[70px] rounded-3xl bg-[#031320]'>
                <span className=' font-bold text-2xl text-sub-100'>0 1</span>
              </div>
              <p className='flex-1 ml-7 font-normal text-xl  text-sub-200 leading-[32.4px]'>
                Click on the sign-in button above or below the website.
              </p>
            </div>
            <div className='flex justify-center items-center flex-row'>
              <div className='flex justify-center items-center w-[70px] h-[70px] rounded-3xl bg-[#031320]'>
                <span className=' font-bold text-2xl text-sub-100'>0 2</span>
              </div>
              <p className='flex-1 ml-7 font-normal text-xl  text-sub-200 leading-[32.4px]'>
                Sign-in or sign-up with your Google account.
              </p>
            </div>
            <div className='flex justify-center items-center flex-row'>
              <div className='flex justify-center items-center w-[70px] h-[70px] rounded-3xl bg-[#031320]'>
                <span className=' font-bold text-2xl text-sub-100'>0 3</span>
              </div>
              <p className='flex-1 ml-7 font-normal text-xl  text-sub-200 leading-[32.4px]'>
                Type your prompt and click to see the magic.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className='h-12'></div>
    </section>
  );
};

export default HowItWorks;
