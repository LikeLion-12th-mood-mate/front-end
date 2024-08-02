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
function Signup() {
    const [isCertified, setIsCertified] = useState(false);
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isButtonClick,setIsButtonClick] = useState(false);
    const [userCertifiedCode,setUserCertifiedCode] = useState();

    const [count, setCount] = useState(2); 
    const [getCertifiedCode, setGetCertifiedCode] = useState();

    const emailRef = useRef();
    const kindOfEmailRef = useRef();
    const passwordRef = useRef();
    const nicknameRef = useRef();
    const navigate = useNavigate();
    useEffect(()=>{
        if(userCertifiedCode!==undefined && getCertifiedCode!==undefined && userCertifiedCode===getCertifiedCode?.certified){
            setIsCertified(true)
        }
        else{
            setIsCertified(false)
        }
    },[userCertifiedCode])
    
    const handleButton=async (event)=>{
        event.preventDefault();
        if(passwordRef.current?.value!==''&&emailRef.current?.value!==''&&nicknameRef.current?.value!==''){
            const emaildata=emailRef.current?.value;
            const pwdata=passwordRef.current?.value;
            const nicknamedata=nicknameRef.current?.value;
            const kindOfEmailData=kindOfEmailRef?.current?.value;
            const response = await PostSignup({email:`${emaildata}@${kindOfEmailData}`,nickname:nicknamedata,password:pwdata})
            if(response.status===200){
                console.log(response.data?.token)
                localStorage.setItem("token",response.data?.token)
                navigate('/complete')
                console.log("사용자 닉네임",`${emaildata}@${kindOfEmailData}`)
            }
            else{
                alert('이미 해당계정을 사용하고 있어요!')
            }
            
        }
        else{
            alert('정보를 입력해주세요')
        }
        
    }
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
                        <div className='password-wrap'>
                            <input className='pw' ref={passwordRef} type={`${isPasswordShow ? '':'password'}`} placeholder='비밀번호를 입력해주세요'/>
                            <img src={isPasswordShow ? IsShow : IsNotShow} onClick={()=> setIsPasswordShow(!isPasswordShow)} className='show-password' alt='show-password' />
                        </div>
                        <div className='nickname-wrap'>
                            <input ref={nicknameRef} className='nickname' placeholder='닉네임을 입력해주세요'/>
                        </div>

                        <form>
                            <button className='check-button' onClick={handleButton} >회원가입 완료하기</button>
                        </form>
                        {/* {isButtonClick&&count>598? <Modal count={count}/> : ''} */}
                    </div>
        </Gridwrap>
                    
              
    </section>
  )
}

export default Signup