import React from 'react'
import star from '../../assets/chat/star.svg';
import { Link } from 'react-router-dom';

function Card(props) {
  
  return (
    <ul className={props.searchTerm ? 'card-wrap active' : 'card-wrap'}>
        {props.consultData?.map((data,index)=>(
          <Link to={`/consult/${data.id}`}>
            <li key={data.id} className='card'>
                <p className='title'>{data.category}</p>
                <div className='content-wrap'>
                  <span className='profile'/>
                  <div className='info'>
                    <span className='rating-wrap'>
                      <img src={star} className='rating-img' alt='star' />
                      <p className='rating'>{data.rating}</p>
                    </span>
                    <span className='name-wrap'>
                      <p className='name'>{data.name}</p>
                      <p className='time'>{data.time}</p>
                    </span>
                    <p className='content'>{data.content}</p>
                  </div>
                </div>
            </li>
          </Link>
            
        ))}
    </ul>
  )
}

export default Card