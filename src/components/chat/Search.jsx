import React from 'react'
import Gridwrap from '../grid/Gridwrap'

import backward from '../../assets/backward2.svg'
import search from '../../assets/chat/search.svg'

function Search({inputRef,handleEnter,setSearchModal,dummydata}) {
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

