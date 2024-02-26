// Card.jsx

import React, { useState } from 'react';

const Card = ({ id, name, info, image, price, btnHandler }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function Handler() {
    setReadmore(!readmore);
  }

  return (
    <div className='main'>
      <div className='image'>
        <img src={image} alt={name}></img>
      </div>
      <div className='info'>
        <div className='price'>
          <h2 className='pri'>{price}</h2>
          <h2 className='name'>{name}</h2>
        </div>

        <div className='description'>
          {description} <span> </span>
          <span className='read-more' onClick={Handler}>
            {readmore ? 'show less' : 'read more'}
          </span>
        </div>

        <div className='btn' onClick={() => btnHandler(id)}>
          <button className='btn-1'>Not Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
