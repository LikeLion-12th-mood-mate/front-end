import React from 'react'

import recent from '../../assets/chat/recent.svg';
import consult from '../../assets/chat/consult.svg';
import star from '../../assets/chat/star.svg';
import speed from '../../assets/chat/speed.svg';

function KeywordButton() {
  return (
    <section className='keyword-wrap'>
        <button className='keyword'>
            <span>😊</span>빠른상담
        </button>
        <button className='keyword'><span>👍</span> 별점 높은 순</button>
        <button className='keyword'><span>✍️</span> 상담 의뢰 순</button>
        <button className='keyword'><span>😊</span> 최근 등록된 상담사</button>
    </section>
  )
}

export default KeywordButton