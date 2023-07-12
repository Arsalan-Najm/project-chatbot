'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Title, DetailCard, Sidebar } from '@/components';
import { useApp } from '@/context/AppContext';
import usePageData from '@/hooks/usePageData';

const page = () => {
  const { data: session, status } = useSession();
  const { toggle, setToggle, setData } = useApp();
  const { data, loading, handleLoadMore } = usePageData();
  return (
    <>
      {session && status === 'authenticated' ? (
        <div className='flex flex-grow-1 justify-center w-full min-h-full'>
          <div className='px-[10px] lg:px-[40px] flex justify-start items-start'>
            <Sidebar session={session} toggle={toggle} setToggle={setToggle} />
            <div className='max-w-[480px] lg:max-w-[1920px] mx-auto lg:mx-0'>
              <Title title='Platforms' />
              <main className='max-w-[1920px] flex flex-grow w-full'>
                <DetailCard data={data} toggle={toggle} setToggle={setToggle} setData={setData} />
              </main>
            </div>
          </div>
        </div>
      ) : (
        redirect('/')
      )}
    </>
  );
};

export default page;
