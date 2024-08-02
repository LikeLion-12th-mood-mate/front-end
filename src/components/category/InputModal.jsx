import React from 'react'
import submitimg from '../../assets/program/submit.svg'
function InputModal({commentRef,handleSubmit}) {
  return (
    <div className='inputmodal'>
        <div className='input-wrap'>
            <input ref={commentRef} className='submit-input' placeholder='댓글을 작성해주세요'/>
            <img src={submitimg} onClick={handleSubmit} className='submit-img'/>
        </div>
    </div>
  )
}

export default InputModal