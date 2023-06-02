'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
const ChatPage = () => {
  const { data: session, status } = useSession();

  return <>{session && status === 'authenticated' ? <h1>WELCOME</h1> : redirect('/')}</>;
};

export default ChatPage;
