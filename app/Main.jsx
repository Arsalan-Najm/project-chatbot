'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { HowItWorks, Hero, About, WhatsNew, World, Footer } from '@/components';
export default function Main() {
  const { data: session, status } = useSession();
  return (
    <div className='relative overflow-hidden'>
      {session?.user?.name && status === 'authenticated' ? (
        redirect('/chat')
      ) : (
        <>
          <Hero />
          <div className='relative'>
            <About />
            <HowItWorks />
            <WhatsNew />
            <World />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
