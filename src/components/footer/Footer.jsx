import React, { useEffect, useState } from 'react';
import {Link, useOutletContext} from 'react-router-dom';

import home from '../../assets/footer/home.svg';
import nothome from '../../assets/footer/nothome.svg';
import consult from '../../assets/footer/consult.svg';
import notconsult from '../../assets/footer/notconsult.svg';
import diary from '../../assets/footer/diary.svg';
import notdiary from '../../assets/footer/notdiary.svg';
import program from '../../assets/footer/program.svg';
import notprogram from '../../assets/footer/notprogram.svg';
import FooterItem from './footerItem';

function Footer({footerState}) {
    const [position, setPosition] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setVisible(position > moving);
      setPosition(moving);
  	}
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);
  return (
    <>
     {visible ? <div className='footer-wrap'>
        <Link to='/home'><FooterItem badge={footerState==='home' ? home:nothome} name="홈"/></Link> 
        <Link to='/consult'><FooterItem badge={footerState==='consult' ? consult :notconsult} name="상담받기"/></Link> 
        <Link to='/diary'><FooterItem badge={footerState==='diary' ? diary :notdiary} name="일기쓰기"/></Link> 
        <Link to="/program"><FooterItem badge={footerState==='program' ? program:notprogram} name="프로그램"/></Link>
    </div>: ''}
    </>
   
    
  )
}

export default Footer