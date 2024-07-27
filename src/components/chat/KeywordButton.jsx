import React from 'react'


function KeywordButton(props) {
  return (
    <section className='keyword-wrap'>
        <button className={props.kindOfKeyword==='빠른상담'?'keyword selected' :'keyword'} onClick={()=>props.handleKeyword('빠른상담')}>
            <span>😊</span>빠른상담
        </button>
        <button className={props.kindOfKeyword==='별점높은순'?'keyword selected' :'keyword'} onClick={()=>props.handleKeyword('별점높은순')}><span>👍</span> 별점 높은 순</button>
        <button className={props.kindOfKeyword==='상담의뢰순'?'keyword selected' :'keyword'} onClick={()=>props.handleKeyword('상담의뢰순')}><span>✍️</span> 상담 의뢰 순</button>
        <button className={props.kindOfKeyword==='최근등록된상담사'?'keyword selected' :'keyword'} onClick={()=>props.handleKeyword('최근등록된상담사')}><span>😊</span> 최근 등록된 상담사</button>
    </section>
  )
}

export default KeywordButton