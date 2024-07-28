import React, { useRef } from 'react'
import { useDispatch } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';

import MainLogo from '../../assets/service-logo.svg';
import PostLogin from '../../api/login/PostLogin';
import Gridwrap from '../grid/Gridwrap';
import { authActions } from "../../store/auth";
import { loginActions } from "../../store/Login";
import Modal from './Modal';
function Login() {
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin= async(event)=>{
    event.preventDefault();
    if(idRef.current.value!=='' & pwRef.current.value!==''){
      const emailData = idRef?.current?.value
      const pwData = pwRef?.current?.value
      try{
        const response = await PostLogin({email:emailData,password:pwData})
        if (response.status === 200) {
          console.log('로그인 성공');
          localStorage.setItem("loginId", emailData);
          localStorage.setItem("password", pwData);

          dispatch(loginActions.login({ emailData, pwData }));
          dispatch(authActions.login());

          navigate('/home');
        } else {
          alert('이메일, 비밀번호를 확인해주세요')
        }
    }catch(error){
        new Error(error)
      }
      
    }
    else{
      alert('아이디와 비밀번호를 입력해주세요')
    }
  }
  return (
    <section className='login'>
      <Gridwrap>
        <div className='login-wrap'>
            <div className='main-logo-wrap'>
              <img src={MainLogo} className='main-logo' alt='main-logo' />
            </div>
         
            <input ref={idRef} className='input-email active' placeholder='아이디를 입력해주세요'/>
            <input ref={pwRef} type='password' className='input-email active' placeholder='비밀번호를 입력해주세요'/>
            <Link to='/signup'>
              <p className='goto-signup'>회원가입</p>
            </Link>
            <form>
              <button className='login-button' onClick={handleLogin}>로그인</button>
            </form>
          
        </div>
      </Gridwrap>
          
     {/* {<Modal/> } */}
    </section>
    
  )
}

export default Login