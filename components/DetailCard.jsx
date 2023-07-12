import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
const DetailCard = ({ data }) => {
  console.log(data);
  return (
    <div className='w-full pb-20'>
      <div>
        <div>
          <div className='w-full flex flex-wrap gap-3'>
            <div className='grid gap-5 lg:grid-cols-3 2xl:grid-cols-4'>
              {data?.map((card) => (
                <div
                  key={card.id}
                  className='relative max-w-[calc(100vw-_20px)] flex w-full py-8 px-6 flex-col rounded-lg overflow-hidden bg-[#1B1E28] shadow-md'
                  style={{
                    backgroundImage: `linear-gradient(rgba(3, 19, 32, 0.5), rgb(3, 19, 32) 80%),url(${card?.image_background})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50%',
                    width: '100%',
                    height: '271.6px',
                  }}
                >
                  <div className=' flex-auto'>
                    <div className='flex flex-col items-center gap-4'>
                      <div>
                        <h3 className='text-sub-100 text-lg underline font-semibold '>{card.name}</h3>
                      </div>
                      <div>
                        <Link
                          href={'/platforms'}
                          className=' py-[10px] px-[35px] text-sub-100 text-base w-auto h-auto bg-[hsla(0,0%,100%,.1)]'
                        >
                          Explore
                        </Link>
                      </div>
                    </div>
                    <div className='w-full mt-10'>
                      <div className='flex items-baseline'>
                        <span className='text-sub-100 text-sm font-bold'>Popualar games</span>
                        <span className='text-sub-200 text-xs ml-auto'>{card.games_count}</span>
                      </div>
                      <ul className='w-full mt-2 pt-2 border-t-[1px] border-sub-200'>
                        {card?.games?.slice(0, 3)?.map((games) => (
                          <li className='flex justify-between w-full mb-[6px] font-normal text-sm'>
                            <Link
                              href={'/platforms'}
                              className='underline overflow-hidden whitespace-nowrap text-sub-100'
                            >
                              {games?.name}
                            </Link>
                            <span className='flex gap-2 items-center text-sub-200'>
                              {games?.added}
                              <BiUser className='inline' />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
