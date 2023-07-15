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
        <div className='lg:flex lg:flex-grow lg:justify-center lg:w-full lg:min-h-full'>
          <div className='px-[10px] lg:px-[40px] lg:flex lg:justify-start lg:items-start max-w-[1920px] w-full'>
            <Sidebar session={session} toggle={toggle} setToggle={setToggle} />
            <main className='max-w-[480px] lg:max-w-[1920px] mx-auto flex flex-col flex-grow w-full'>
              <div>
                <div>
                  <Title title='Stores' />
                </div>
                <div className='py-4'>
                  <DetailCard data={data} toggle={toggle} setToggle={setToggle} setData={setData} />
                </div>
              </div>
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
