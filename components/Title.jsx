import React from 'react';

const Title = (props) => {
  const { title, subTitle } = props;
  return (
    <div className='text-center my-4 lg:text-left lg:mx-2'>
      <h2 className='text-sub-100 text-4xl font-semibold lg:text-7xl'>{title}</h2>
      <p className='text-sub-100 text-lg lg:text-2xl'>{subTitle}</p>
    </div>
  );
};

export default Title;
