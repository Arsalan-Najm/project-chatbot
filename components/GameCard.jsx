import React from 'react';
import Image from 'next/image';
import { BsArrowRight, BsGift, BsPlus, BsPlaystation, BsXbox, BsWindows } from 'react-icons/bs';
const GameCard = ({ data, setData }) => {
  const handleExpandToggle = (cardId) => {
    setData((prevCards) => {
      const isExpanded = prevCards.find((item) => item.id === cardId)?.expand;
      const updatedCards = prevCards.map((item) => ({
        ...item,
        expand: item.id === cardId && !isExpanded,
      }));
      return updatedCards;
    });
  };
  const handleMouseEnter = (cardId) => {
    setData((prevCards) => {
      return prevCards.map((item) => {
        if (item.id === cardId) {
          return { ...item, expand: true };
        }
        return item;
      });
    });
  };

  const handleMouseLeave = (cardId) => {
    setData((prevCards) => {
      return prevCards.map((item) => {
        if (item.id === cardId) {
          return { ...item, expand: false };
        }
        return item;
      });
    });
  };
  return (
    <main className='max-w-[1920px] lg:flex lg:flex-col lg:w-full lg:grow w-full flex-wrap content-stretch justify-around items-stretch'>
      <div className='w-full pb-24'>
        <div className='w-full py-4'>
          <div>
            <div className='flex flex-col items-center gap-3 p-2 '>
              <div className='lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-3 '>
                {data?.map((item) => (
                  <div className='w-full'>
                    <div className='bg-[#1B1E28]  rounded-xl overflow-hidden mt-3'>
                      <div className='w-full overflow-hidden rounded-tl-xl rounded-tr-xl'>
                        <div className='relative w-full'>
                          <div className='relative w-full overflow-hidden'>
                            <Image src={item?.background_image} width={358} height={201} />
                          </div>
                        </div>
                      </div>
                      <div className='p-4'>
                        <div className='flex justify-content-start items-center'>
                          <div className='flex-auto'>
                            <div className='mr-2 inline-flex'>
                              <BsPlaystation className='inline text-sub-200' />
                            </div>
                            <div className='mr-2 inline-flex'>
                              <BsXbox className='inline text-sub-200' />
                            </div>
                            <div className='mr-2 inline-flex'>
                              <BsWindows className='inline text-sub-200' />
                            </div>
                          </div>
                          <div className='min-w-[32px] inline-block py-[2px] font-bold text-center border-[1px] rounded text-[#6dc849]'>
                            {item?.metacritic}
                          </div>
                        </div>
                        <div className='overflow-hidden mb-2 pb-1'>
                          <h3 className='text-sub-100 text-2xl'>{item?.name}</h3>
                        </div>
                        <div className='flex items-center gap-2'>
                          <button className='flex text-base bg-main-200 text-sub-100 items-center min-w-[34px] border-none rounded min-h-[24px] px-2 font-normal'>
                            <span>
                              <BsPlus />
                            </span>
                            <span>{item?.added}</span>
                          </button>
                          <button className='flex text-base bg-main-200 text-sub-100 items-center min-w-[34px] border-none rounded min-h-[24px] px-2 font-normal'>
                            <span>
                              <BsGift />
                            </span>
                          </button>
                          <button className='flex text-base bg-main-200 text-sub-100 items-center min-w-[34px] border-none rounded min-h-[24px] px-2 font-normal'>
                            <span>{item?.rating} / 5</span>
                          </button>
                        </div>
                        <ul className='text-[14px] leading-normal mt-1 font-normal p-0'>
                          {item?.expand ? (
                            <>
                              <li className='pb-3 border-b-[1px] border-sub-200 flex justify-between items-baseline pt-[10px]'>
                                <div className='flex items-center mr-[6px] text-sub-200'>Release Date:</div>
                                <div className='text-right text-sub-100'>{item?.released}</div>
                              </li>
                              <li className='pb-3 border-b-[1px] border-sub-200 flex justify-between items-baseline pt-[10px]'>
                                <div className='flex items-center mr-[6px] text-sub-200'>Genres:</div>
                                <div className='text-right text-sub-100'>
                                  {item.genres.map((genre) => (
                                    <span className='text-sub-100 underline mx-[2px]'>{genre.name},</span>
                                  ))}
                                </div>
                              </li>
                              <li className='pb-3 border-b-[1px] border-sub-200 flex justify-between items-baseline pt-[10px]'>
                                <div className='flex items-center mr-[6px] text-sub-200'>Playtime:</div>
                                <div className='text-right text-sub-100'>{item?.playtime} Hours</div>
                              </li>
                              <li
                                className='flex justify-center items-baseline pt-[10px] underline text-sub-100 lg:hidden'
                                onClick={() => handleExpandToggle(item.id)}
                              >
                                View less
                              </li>
                            </>
                          ) : (
                            <li
                              className='flex justify-center items-baseline pt-[10px] underline text-sub-100 lg:hidden'
                              onClick={() => handleExpandToggle(item.id)}
                            >
                              View More
                            </li>
                          )}
                        </ul>
                        {item?.expand && (
                          <button className='relative w-full flex justify-between mt-4 items-center bg-main-100 py-3 px-4 rounded-lg text-sm font-normal text-sub-100'>
                            <span>Show all details of this game</span>
                            <span>
                              <BsArrowRight />
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GameCard;
