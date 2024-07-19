import React, { useEffect } from 'react'
//메일인증 한번 더 클릭했을 시 시간 초기화 되게끔 해야함
function CertifiedCount(props) {
    const min = Math.floor(props.count / 60);
    const sec = props.count % 60;
    useEffect(()=>{
        const id =setInterval(()=>{
          props.setCount(val=>val-1 )
        },1000);
        
        if(props.count===0){
          clearInterval(id);
          
        }
        
        return () => clearInterval(id);
      },[,props.count])
  return (
    <div className='count-wrap'>{`${min}:${sec}`}</div>
  )
}

export default CertifiedCount