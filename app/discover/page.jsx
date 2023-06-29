'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Sidebar, GameCard, Title } from '@/components';
import { useApp } from '@/context/AppContext';
import { useEffect } from 'react';
const ChatPage = () => {
  const { data: session, status } = useSession();
  const { toggle, setToggle, data, setData } = useApp();
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch('/api/games');
      const data = await response.json();
      setData(data);
    };
    fetchGames();
  }, []);
  return (
    <>
      {session && status === 'authenticated' ? (
        <div className='flex justify-center w-full min-h-full lg:grow'>
          <div className='flex w-full justify-between items-start'>
            <Sidebar session={session} toggle={toggle} setToggle={setToggle} />
            <div className='relative flex-col grow flex items-center lg:items-start m-auto min-h-full max-w-[480px] lg:max-w-full'>
              <Title title='New and trending' subTitle='Based on player counts and release date' />
              <GameCard data={data} setData={setData} />
            </div>
          </div>
        </div>
      ) : (
        redirect('/')
      )}
    </>
  );
};

export default ChatPage;
