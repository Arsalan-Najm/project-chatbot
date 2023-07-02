import React from 'react';
import Image from 'next/image';
import { BsArrowRight, BsGift, BsPlus, BsPlaystation, BsXbox, BsWindows } from 'react-icons/bs';
const GameCard = ({ data, setData, handleLoad, loading }) => {
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
    if (!isSmallScreen()) {
      setData((prevCards) => {
        return prevCards.map((item) => {
          if (item.id === cardId) {
            return { ...item, expand: true };
          }
          return item;
        });
      });
    }
  };
  const handleMouseLeave = (cardId) => {
    if (!isSmallScreen()) {
      setData((prevCards) => {
        return prevCards.map((item) => {
          if (item.id === cardId) {
            return { ...item, expand: false };
          }
          return item;
        });
      });
    }
  };
  const isSmallScreen = () => {
    return window.innerWidth <= 768;
  };
  return (
    <div className='my-4'>
      <div>
        <div className='flex flex-col items-center'>
          <div className='grid w-full gap-6 lg:grid-cols-3 2xl:grid-cols-4'>
            {data?.map((card) => (
              <div
                className={`${card.expand ? 'lg:relative' : null}`}
                onMouseEnter={() => handleMouseEnter(card.id)}
                onMouseLeave={() => handleMouseLeave(card.id)}
              >
                <div
                  className={`bg-[#1B1E28] shadow-md overflow-hidden rounded-xl ${
                    card.expand ? 'lg:absolute lg:w-full lg:z-40 lg:left-0 lg:top-0' : null
                  } `}
                >
                  <div className='w-full overflow-hidden rounded-tr-xl rounded-tl-xl'>
                    <div className='relative w-full h-0 overflow-hidden pb-[56.25%]'>
                      <Image
                        src={card?.background_image}
                        width={358}
                        height={201}
                        className='absolute w-full h-full top-0 left-0 object-cover'
                      />
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
                        {card?.metacritic}
                      </div>
                    </div>
                    <div className='overflow-hidden mb-2 pb-1'>
                      <h3 className='text-sub-100 text-2xl'>{card?.name}</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button className='flex text-base bg-main-200 text-sub-100 items-center min-w-[34px] border-none rounded min-h-[24px] px-2 font-normal'>
                        <span>
                          <BsPlus />
                        </span>
                        <span>{card?.added}</span>
                      </button>
                      <button className='flex text-base bg-main-200 text-sub-100 items-center min-w-[34px] border-none rounded min-h-[24px] px-2 font-normal'>
                        <span>
                          <BsGift />
                        </span>
                      </button>
                      <button className='flex text-base bg-main-200 text-sub-100 items-center min-w-[34px] border-none rounded min-h-[24px] px-2 font-normal'>
                        <span>{card?.rating} / 5</span>
                      </button>
                    </div>
                    <ul className='text-[14px] leading-normal mt-1 font-normal p-0'>
                      {card?.expand ? (
                        <>
                          <li className='pb-3 border-b-[1px] border-sub-200 flex justify-between items-baseline pt-[10px]'>
                            <div className='flex items-center mr-[6px] text-sub-200'>Release Date:</div>
                            <div className='text-right text-sub-100'>{card?.released}</div>
                          </li>
                          <li className='pb-3 border-b-[1px] border-sub-200 flex justify-between items-baseline pt-[10px]'>
                            <div className='flex items-center mr-[6px] text-sub-200'>Genres:</div>
                            <div className='text-right text-sub-100'>
                              {card.genres.map((genre) => (
                                <span className='inline-block text-center text-sub-100 underline mx-[2px]'>
                                  {genre.name},
                                </span>
                              ))}
                            </div>
                          </li>
                          <li className='pb-3 border-b-[1px] border-sub-200 flex justify-between items-baseline pt-[10px]'>
                            <div className='flex items-center mr-[6px] text-sub-200'>Playtime:</div>
                            <div className='text-right text-sub-100'>{card?.playtime} Hours</div>
                          </li>
                          <li
                            className='flex justify-center items-baseline pt-[10px] underline text-sub-100 lg:hidden'
                            onClick={() => handleExpandToggle(card.id)}
                          >
                            View less
                          </li>
                        </>
                      ) : (
                        <li
                          className='flex justify-center items-baseline pt-[10px] underline text-sub-100 lg:hidden'
                          onClick={() => handleExpandToggle(card.id)}
                        >
                          View More
                        </li>
                      )}
                    </ul>
                    {card?.expand && (
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
        <div className='flex justify-center my-3'>
          <button className='px-10 py-2 bg-main-100 text-sub-100' onClick={handleLoad} disabled={loading}>
            {loading ? 'Loading...' : 'Load more'}
          </button>
        </div>
        -
      </div>
    </div>
  );
};

export default GameCard;
