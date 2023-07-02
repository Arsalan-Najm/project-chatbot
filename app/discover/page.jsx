'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Sidebar, GameCard, Title } from '@/components';
import { useApp } from '@/context/AppContext';
import { useEffect } from 'react';
const ChatPage = () => {
  const { data: session, status } = useSession();
  const { toggle, setToggle, data, setData, page, setPage, loading, setLoading } = useApp();
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      const response = await fetch(`/api/games?page=${page}`);
      const data = await response.json();
      const mappedData = data.results.map((item) => ({
        ...item,
        isFavorite: false,
        expand: false,
      }));
      setData((prevGames) => [...prevGames, ...mappedData]);
      setLoading(false);
    };
    fetchGames();
  }, [page]);

  const handleLoad = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {session && status === 'authenticated' ? (
        <div className='flex flex-grow-1 justify-center w-full min-h-full'>
          <div className='px-[40px] flex justify-start items-start'>
            <Sidebar session={session} toggle={toggle} setToggle={setToggle} />
            <main className='max-w-[1920px] flex flex-col flex-grow w-full'>
              <div>
                <Title title='New and trending' subTitle='Based on player counts and release date' />
                <GameCard data={data} setData={setData} handleLoad={handleLoad} loading={loading} />
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

export default ChatPage;
