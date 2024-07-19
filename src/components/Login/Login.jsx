import React, { useRef } from 'react'

import MainLogo from '../../assets/service-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import PostLogin from '../../api/login/PostLogin';
function Login() {
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate()
  const handleLogin= async(event)=>{
    event.preventDefault();
    if(idRef.current.value!=='' & pwRef.current.value!==''){
      //const response = PostLogin(idRef.current.value,pwRef.current.value)
      //console.log(response)
      navigate('/home')
    }
    else{
      alert('아이디와 비밀번호를 입력해주세요')
    }
  }
  return (
    <section className='login'>
    <div className='container'>
      <div className='row'>
        <div className='col-sm-5'  >
          <div className='login-wrap'>
            <div className='main-logo-wrap'>
              <img src={MainLogo} className='main-logo' alt='main-logo' />
            </div>
         
            <input ref={idRef} className='input-email active' placeholder='아이디를 입력해주세요'/>
            <input ref={pwRef} className='input-email active' placeholder='비밀번호를 입력해주세요'/>
            <Link to='/signup'>
              <p className='goto-signup'>회원가입</p>
            </Link>
            <form>
              <button className='login-button' onClick={handleLogin}>로그인</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    </section>
    
  )
}

export default Login