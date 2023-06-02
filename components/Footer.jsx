'use client';
import { signIn } from 'next-auth/react';
import { TypeAnimation } from 'react-type-animation';
const Footer = () => {
  return (
    <footer className='sm:px-16 px-6 py-8 relative'>
      <div className='2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8'>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h3 className='font-bold text-5xl sm:text-7xl text-sub-100'>Explore The ChitChat</h3>
          <button
            className='py-4 px-6 text-sub-100 text-lg rounded-full bg-main-100 drop-shadow-sm font-semibold hover:bg-opacity-50'
            onClick={() => signIn('google')}
          >
            Let's Chat
          </button>
        </div>
        <div className='flex flex-col'>
          <div className='mb-[50px] h-[2px] bg-sub-100 opacity-10'></div>
          <div className='flex flex-col gap-4'>
            <h2 className='font-extrabold text-3xl text-sub-100'>Message From The Creator</h2>
            <p className='font-normal text-xl text-sub-100 opacity-50'>
              The code and content on this website are the property of the owner. Any unauthorized use, reproduction, or
              distribution is strictly prohibited. The owner holds no responsibility for any illegal actions taken by
              visitors or users of this website. Please use this website responsibly and adhere to applicable laws and
              regulations.
            </p>
            <p className='font-normal text-xl text-sub-100 opacity-50'>
              The user credentials provided on this website are securely stored and protected. We prioritize the privacy
              and security of our users' information. However, it is important for users to exercise caution and ensure
              the confidentiality of their own credentials. The website owner will not be held liable for any
              unauthorized access or misuse of user credentials. By using this website, users acknowledge and accept the
              responsibility for maintaining the security of their login information.
            </p>
          </div>
        </div>
        <div className='mb-[50px] h-[2px] bg-sub-100 opacity-10'></div>
        <div className='text-center '>
          <p className='font-normal text-xl text-sub-100 opacity-50'>
            Copyright &copy; 2023 ChitChat. Designed And Developed By{' '}
            <a href='https://arsalan-najm.web.app/' target='_blank' rel='noreferrer' className='underline'>
              Arsalan Najm.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
