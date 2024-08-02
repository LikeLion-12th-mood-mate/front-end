import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
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
  const isauth = useSelector(
    (state) => state.auth.isAuthenticated
  );
  
  const handleLogin= async(event)=>{
    event.preventDefault();
    if(idRef.current.value!=='' & pwRef.current.value!==''){
      const emailData = idRef?.current?.value
      const pwData = pwRef?.current?.value
      try{
        const response = await PostLogin({email:emailData,password:pwData})
        if (response.status === 200) {
          console.log('로그인 성공');
          console.log(response.data)
          sessionStorage.setItem('email', emailData);
          sessionStorage.setItem("password", pwData);
          sessionStorage.setItem("token", response.data.token);
          
          dispatch(loginActions.login({ email:emailData,password:pwData }));
          dispatch(authActions.login());
          console.log("아이디전역상태:",isauth)
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