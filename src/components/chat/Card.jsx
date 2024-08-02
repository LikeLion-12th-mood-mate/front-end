import React from 'react'
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

function Card(props) {
  
  return (
    <ul className={props.searchTerm ? 'card-wrap active' : 'card-wrap'}>
        {props.consultData?.map((data,index)=>(
          <Link to={`/consult/${data.id}`}>
            {props.searchTerm?<CardItem searchTerm={props.searchTerm} data={data}/> : props?.category===data?.category ? 
              <CardItem data={data}/>: ''
            }
            
          </Link>
            
        ))}
    </ul>
  )
}

export default Card