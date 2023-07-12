import React from 'react';
import Image from 'next/image';
const DetailCard = ({ data }) => {
  console.log(data);
  return (
    <div className='w-full pb-20'>
      <div>
        <div>
          <div className='w-full flex flex-wrap gap-3'>
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
                  <div className='flex flex-col items-center'>
                    <div>
                      <h3 className='text-sub-100 '>{card.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
