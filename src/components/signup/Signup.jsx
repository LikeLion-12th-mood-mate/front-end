import React from 'react'

function Signup() {
  return (
    <section className='signup'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-5'>
                    <div className='signup-wrap'>
                        <h3 className='signup-title'>서비스 이용 시작 전 <br/> 본인인증이 필요합니다.</h3>
                        <div className='email-wrap'>
                        <input className='input-bs' placeholder='이메일 주소'/>
                        @<select className='input-bs'>
                           <option>gmail.com</option>
                           <option>naver.com</option>
                           <option>daum.com</option>
                           <option>hanmail.com</option>
                           <option>icloud.com</option>
                        </select>
                        </div>
                        
                        <input className='certified' placeholder='인증 코드를 입력해주세요'/>
                        <p className='is-certified'>인증 코드를 못 받았어요</p>
                        <input className='pw' placeholder='비밀번호를 입력해주세요'/>

                        <form>
                            <button className='check-button' >메일받기</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup