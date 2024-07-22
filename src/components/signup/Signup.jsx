import React, { useEffect, useRef, useState } from 'react'

import Email_Option from '../../assets/signup/email-option.svg'
import Check from '../../assets/signup/certified-check.svg';
import Uncheck from '../../assets/signup/certified-uncheck.svg';
import IsShow from '../../assets/signup/showpassword.svg';
import IsNotShow from '../../assets/signup/unshowpassword.svg';
import PostEmail from '../../api/signup/PostEmail';
import PostSignup from '../../api/signup/PostSignup';
import CertifiedCount from './CertifiedCount';
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';
import Gridwrap from '../grid/Gridwrap';
const dummydata={
    certified:'1234'
}
function Signup() {
    const [isCertified, setIsCertified] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isButtonClick,setIsButtonClick] = useState(false);
    const [userCertifiedCode,setUserCertifiedCode] = useState();
    

    const [count, setCount] = useState(600); 
    const [getCertifiedCode, setGetCertifiedCode] = useState();

    const emailRef = useRef();
    const kindOfEmailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    useEffect(()=>{
        if(userCertifiedCode!==undefined && getCertifiedCode!==undefined && userCertifiedCode===getCertifiedCode?.certified){
            setIsCertified(true)
        }
        else{
            setIsCertified(false)
        }
    },[userCertifiedCode])
    
    const handleButton=(event)=>{
        event.preventDefault();
        if(isCertified){
            if(passwordRef.current?.value!==''){
                //const response = PostSignup()
                navigate('/complete')
            }
            else{
                alert('비밀번호를 입력해주세요')
            }
            
        }
        else{
            if(emailRef.current?.value!==''){
                setIsButtonClick(true);
                setCount(600)
                //const response = PostEmail({})
                //console.log(response)
                setGetCertifiedCode(dummydata);
            }
            else{
                alert('이메일을 입력해주세요')
                setIsError(true)
            }
            
        }
        
    }
    console.log("시간",count)
    console.log("사용자 코드",userCertifiedCode)
    console.log("이메일 코드",getCertifiedCode?.certified)
    console.log("이메일===사용자:",isCertified)
    console.log("이메일 종류",kindOfEmailRef.current?.value)
  return (
    <section className='signup'>
        <Gridwrap>
            <div className='signup-wrap'>
                        <h3 className='signup-title'>{isCertified ? <>인증 된 메일은<br/>
                            아이디로 사용할게요😊</>:<>서비스 이용 시작 전 <br/> 본인인증이 필요합니다.</>}</h3>
                        <div className='email-wrap'>
                            <input ref={emailRef} className='input-bs' placeholder='이메일 주소'/>

                           <span>@</span>
                           <div className='email-option-wrap'>
                            <select ref={kindOfEmailRef} className='input-email-option'>
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
                            <input className='certified' onChange={(e)=>setUserCertifiedCode(e.target.value)} placeholder='인증 코드를 입력해주세요'/>
                            {isButtonClick?  <CertifiedCount isButtonClick={isButtonClick} count={count} setCount={setCount}/> : ''}
                            
                        </div>
                       
                        <p className={isCertified ? 'is-certified active' : 'is-certified'} >{isCertified ?'인증이 완료되었어요':'인증이 안되었어요'}</p>
                        <div className='password-wrap'>
                            <input className='pw' ref={passwordRef} type={`${isPasswordShow ? '':'password'}`} placeholder='비밀번호를 입력해주세요'/>
                            <img src={isPasswordShow ? IsShow : IsNotShow} onClick={()=> setIsPasswordShow(!isPasswordShow)} className='show-password' alt='show-password' />
                        </div>

                        <form>
                            <button className='check-button' onClick={handleButton} >{isCertified ? '회원가입 완료하기':'메일받기'}</button>
                        </form>
                        {isButtonClick&&count>598? <Modal count={count}/> : ''}
                    </div>
        </Gridwrap>
                    
              
    </section>
  )
}

export default Signup