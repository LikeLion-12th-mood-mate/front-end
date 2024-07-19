import React, { useRef, useState } from 'react'

import Email_Option from '../../assets/signup/email-option.svg'
import Check from '../../assets/signup/certified-check.svg';
import Uncheck from '../../assets/signup/certified-uncheck.svg';
import IsShow from '../../assets/signup/showpassword.svg';
import IsNotShow from '../../assets/signup/unshowpassword.svg';
import PostEmail from '../../api/signup/PostEmail';
import CertifiedCount from './CertifiedCount';
import Modal from './Modal';

function Signup() {
    const [isCertified, setIsCertified] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isButtonClick,setIsButtonClick] = useState(false);
    const [count, setCount] = useState(600);

    const emailRef = useRef();
    const passwordRef = useRef();
    const getEmail=(event)=>{
        event.preventDefault();
        console.log(emailRef.current.value)
        setIsButtonClick(true);
        //const response = PostEmail({})
        //console.log(response)
    }
    console.log(count)
  return (
    <section className='signup'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-5'>
                    <div className='signup-wrap'>
                        <h3 className='signup-title'>서비스 이용 시작 전 <br/> 본인인증이 필요합니다.</h3>
                        <div className='email-wrap'>
                            <input ref={emailRef} className='input-bs active' placeholder='이메일 주소'/>

                           <span>@</span>
                           <div className='email-option-wrap'>
                            <select className='input-email-option'>
                                <option>gmail.com</option>
                                <option>naver.com</option>
                                <option>daum.com</option>
                                <option>hanmail.com</option>
                                <option>icloud.com</option>
                            </select>
                            <img className='downdrop' src={Email_Option} alt='email-option-image'/>
                           </div>
                          
                        </div>
                        <div className='certified-wrap'>
                            <img src={isCertified ? Check : Uncheck} className='certified-check' alt='check-image' />
                            <input className='certified' placeholder='인증 코드를 입력해주세요'/>
                            {isButtonClick?  <CertifiedCount isButtonClick={isButtonClick} count={count} setCount={setCount}/> : ''}
                            
                        </div>
                       
                        <p className={isCertified ? 'is-certified active' : 'is-certified'} >{isCertified ?'인증이 완료되었어요':'인증 코드를 못 받았어요'}</p>
                        <div className='password-wrap'>
                            <input className='pw' ref={passwordRef} type={`${isPasswordShow ? '':'password'}`} placeholder='비밀번호를 입력해주세요'/>
                            <img src={isPasswordShow ? IsShow : IsNotShow} onClick={()=> setIsPasswordShow(!isPasswordShow)} className='show-password' alt='show-password' />
                        </div>

                        <form>
                            <button className='check-button' onClick={getEmail} >메일받기</button>
                        </form>
                        {isButtonClick? <Modal/> : ''}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup