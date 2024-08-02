import React from 'react'

import star from '../../assets/chat/star.svg';

function CardItem({data,searchTerm}) {
  return(
        <li key={data.id} className={searchTerm? 'card active':'card'}>
              <p className='title'>{data.category}</p>
              <div className='content-wrap'>
                <span className='profile' style={{backgroundImage:`url(${data.imgUrl})`}}/>
                <div className='info'>
                  <span className='rating-wrap'>
                    <img src={star} className='rating-img' alt='star' />
                    <p className='rating'>{data.rating}</p>
                  </span>
                  <span className='name-wrap'>
                    <p className='name'>{data.name}</p>
                    <p className='time'>{data.time}</p>
                  </span>
                  <p className='content'>{data.comment}</p>
                </div>
              </div>
          </li>
  )
  
}

export default CardItem