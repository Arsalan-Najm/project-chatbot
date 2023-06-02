'use client';
import { motion } from 'framer-motion';
import { containerVariant, fadeIn } from '@/utils/motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Poster from '../public/code.webp';
import { BsShieldFillCheck, BsRobot } from 'react-icons/bs';
const WhatsNew = () => {
  return (
    <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
      <motion.div
        variants={containerVariant}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'
      >
        <div className='flex-[0.95] flex justify-center flex-col'>
          <p className='font-normal text-xl text-sub-200'>
            <span>| Whats New?</span>
          </p>
          <h2 className='mt-2 font-bold text-5xl sm:text-7xl text-sub-100'>
            <span>Powered By </span>
            <TypeAnimation
              sequence={['Google Oauth', 1000, 'Next auth', 1000]}
              repeat={Infinity}
              cursor={false}
              wrapper='span'
            />
            <span> Functions.</span>
          </h2>

          <div className='mt-11 flex flex-wrap justify-between gap-6'>
            <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
              <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#031320]'>
                <BsShieldFillCheck className='text-sub-100 scale-150' />
              </div>
              <h3 className='mt-[26px] font-bold text-3xl leading-[30.24px] text-sub-100'>Secured Than Ever</h3>
              <p className='flex-1 mt-[16px]  font-normal text-lg text-sub-200 leading-[32.4px]'>
                With Google's robust security, there's no need to worry about the safety of your data
              </p>
            </div>
            <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
              <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#031320]'>
                <BsRobot className='text-sub-100 scale-150' />
              </div>
              <h3 className='mt-[26px] font-bold text-3xl leading-[30.24px] text-sub-100'>Secure Credentials</h3>
              <p className='flex-1 mt-[16px]  font-normal text-lg text-sub-200 leading-[32.4px]'>
                Your credentials are securely saved and will never be shared with any third parties.
              </p>
            </div>
          </div>
        </div>
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className='flex-1 flex justify-center items-center'>
          <Image src={Poster} className='w-[90%] h-[90%] object-contain' />
        </motion.div>
      </motion.div>
      <div className='h-12'></div>
    </section>
  );
};

export default WhatsNew;
