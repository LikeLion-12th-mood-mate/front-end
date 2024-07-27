import React from 'react'
import Gridwrap from '../grid/Gridwrap'

import backward from '../../assets/backward2.svg'
import search from '../../assets/chat/search.svg'
const dummydata=[
    {
        id:1,
        name:'직장상담',
        emogy:'🏢'
    },
    {
        id:2,
        name:'부부상담',
        emogy:'👩‍❤️‍👨'
    },
    {
        id:3,
        name:'가족상담',
        emogy:'👨‍👩‍👧‍👦‍'
    },
    {
        id:4,
        name:'청소년상담',
        emogy:'😊'
    },
    {
        id:5,
        name:'아동상담',
        emogy:'👦'
    },
    {
        id:6,
        name:'스트레스상담',
        emogy:'😖‍'
    },
    {
        id:7,
        name:'불안장애상담',
        emogy:'😟‍'
    },
    {
        id:8,
        name:'우울증상담',
        emogy:'😢'
    },
    {
        id:9,
        name:'중독상담',
        emogy:'🤩‍'
    },
    {
        id:10,
        name:'자존감상담',
        emogy:'🥰'
    },
]
function Search({inputRef,handleEnter,setSearchModal}) {
    const handlekeyword=(name)=>{
        inputRef.current.value=name;
    }
  return (
    <div className='search'>
        <Gridwrap>
            <img src={backward} onClick={()=>setSearchModal(false)} className='backward' alt='backward'/>
            <div className='search-input-wrap'>
                <input ref={inputRef} onKeyPress={()=>handleEnter()} className='search-input' placeholder='찾고 계신 상담사님이 따로 있으신가요?'/>

                <img src={search} className='search-image' alt='search' />
            </div>
            <h4>키워드로 검색해보세요!</h4>
            <ul className='search-keyword-wrap'>
                {dummydata.map((item)=>(
                    <li key={item.id} onClick={()=>handlekeyword(item.name)} className='search-keyword'>{item.emogy}{ item.name}</li>
                ))}
            </ul>
        </Gridwrap>
    </div>
  )
}

export default Search

