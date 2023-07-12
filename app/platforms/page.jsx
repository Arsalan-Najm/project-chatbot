'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Title, DetailCard } from '@/components';
import { useApp } from '@/context/AppContext';
import usePageData from '@/hooks/usePageData';

const page = () => {
  const { data: session, status } = useSession();
  const { toggle, setToggle, setData } = useApp();
  const { data, loading, handleLoadMore } = usePageData();
  return (
    <>
      {session && status === 'authenticated' ? (
        <div className='relative min-h-full flex flex-col px-[10px]'>
          <div className='max-w-[480px]'>
            <Title title='Platforms' />
            <main className='max-w-[1920px] flex flex-grow w-full'>
              <DetailCard data={data} toggle={toggle} setToggle={setToggle} setData={setData} />
            </main>
          </div>
        </div>
      ) : (
        redirect('/')
      )}
    </>
  );
};

export default page;
