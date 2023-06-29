'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import About from '@/pages/About';
import HowItWorks from '@/pages/Works';
import Hero from '@/pages/Hero';
import WhatsNew from '@/pages/WhatsNew';
import World from '@/pages/World';
import { Footer } from '@/components';
export default function Main() {
  const { data: session, status } = useSession();
  return (
    <div>
      {session && status === 'authenticated' ? (
        redirect('/discover')
      ) : (
        <>
          <Hero />
          <About />
          <HowItWorks />
          <WhatsNew />
          <World />
          <Footer />
        </>
      )}
    </div>
  );
}
