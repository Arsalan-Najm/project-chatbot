'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Sidebar, GameCard, Title } from '@/components';
import { useApp } from '@/context/AppContext';
import usePageData from '@/hooks/usePageData';
import ReactPaginate from 'react-paginate';
const Page = () => {
  const { data: session, status } = useSession();
  const { toggle, setToggle, setData, totalPages } = useApp();
  const { data, loading, handleLoadMore } = usePageData();
  return (
    <>
      {session && status === 'authenticated' ? (
        <div className='flex flex-grow-1 justify-center w-full min-h-full'>
          <div className='p-3 lg:px-[40px] flex justify-start items-start'>
            <Sidebar session={session} toggle={toggle} setToggle={setToggle} />
            <main className='max-w-[1920px] flex flex-col flex-grow w-full'>
              <div>
                <Title title='Best of the year' />
                <GameCard data={data} setData={setData} />
                <ReactPaginate
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  breakLabel={'...'}
                  pageCount={totalPages}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={5}
                  onPageChange={handleLoadMore}
                  containerClassName='relative my-10 m-auto flex text-sub-200 rounded-full p-3 bg-main-200 justify-between lg:justify-around lg:w-3/4  text-sm lg:text-base'
                  pageClassName='cursor-pointer px-2 rounded-full hover:bg-blue-700'
                  pageLinkClassName='text-sub-200'
                  previousClassName='cursor-pointer px-2 rounded-full hover:bg-blue-500'
                  nextClassName='cursor-pointer px-2 rounded-full hover:bg-blue-500'
                  activeClassName='bg-blue-500 text-white'
                />
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

export default Page;
