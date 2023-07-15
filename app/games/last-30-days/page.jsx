'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Title, GameCard, Sidebar } from '@/components';
import { useApp } from '@/context/AppContext';
import usePageData from '@/hooks/usePageData';
import ReactPaginate from 'react-paginate';
const page = () => {
  const { data: session, status } = useSession();
  const { toggle, setToggle, setData, totalPages } = useApp();
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
                  <Title title='Last 30 days' />
                </div>
                <div>
                  <GameCard data={data} toggle={toggle} setToggle={setToggle} setData={setData} />
                </div>
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

export default page;
