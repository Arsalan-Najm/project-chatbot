'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { About, Hero, WhatsNew, World, HowItWorks } from '@/pages';
import { Footer } from '@/components';
export default function Main() {
  const { data: session, status } = useSession();
  return (
    <div>
      {session?.user?.name && status === 'authenticated' ? (
        redirect('/chat')
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
