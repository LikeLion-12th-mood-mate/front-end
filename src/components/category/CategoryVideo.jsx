import React, { useEffect,useRef,useState } from 'react'
import {Link, Outlet,useParams} from 'react-router-dom';
//import 'category_video.scss';
import GetVideoOne from '../../api/category/GetVideoOne';
import backward from '../../assets/backward2.svg';
import star from '../../assets/program/star.svg';
import comment from '../../assets/program/comment.svg';
import InputModal from './InputModal';
import PostComment from '../../api/category/PostComment';

function CategoryVideo() {
  const {id}=useParams()
  const [data,setData]=useState();
  const commentRef=useRef();
  
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const data = await GetVideoOne(id); // GetChatInfo에서 데이터를 가져옵니다.
        console.log(data.data)
        setData(data.data);
   
        
      } catch (error) {
        return new Error(error)
      }
    };

    fetchData(); // 비동기 함수를 호출합니다.
  },[])
  
  const handleSubmit=async()=>{
    const reviewText = commentRef?.current?.value;
    const response = await PostComment({videoId:id,reviewText:commentRef?.current?.value});
    console.log(response.data);
    setData(prevData => ({
      ...prevData,
      reviews: [...prevData.reviews, { rating: '4.3', reviewText: reviewText }]
    }));
    commentRef.current.value='';
  }
  
  // 데이터가 로드된 후 URL, name, title 추출
  const videoUrl = data?.url; 
  const videoId = videoUrl?.split('v=')[1].split('&')[0];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  const review_count = data?.reviews?.length
  const totalRating = data?.reviews?.reduce((acc, review) => acc +  parseFloat(review.rating), 0);
  const average = (totalRating / data?.reviews?.length).toFixed(2);;
  return (
    <div className='category-video'>
      <Link to='/program'>
      <img className='back'src={backward}/>
      </Link>
      <p className='title'>{data?.title}[{data?.name}]</p>
      <img className='ssumnail'src={thumbnailUrl}/>
      <div className='interest-wrap'>
        <div className='comment-wrap'>
          <img src={comment}/>
          <p>{review_count}</p>
        </div>
        <div className='comment-wrap'>
          <img src={star}/>
          <p>{average}</p>
        </div>
      </div>
      <ul className='video-review-wrap'>
        {data?.reviews?.map((item)=>
          <li className='video-review'>
            <div className='video-title-wrap'>
              <div className='video-name-wrap'>
                <span className='profile'/>
                <p className='name'>익명의 고라니</p>
              </div>
              <div className='video-rating-wrap'>
                <img src={star} className='start' alt='star'/>
                <p className='num'>{item.rating}</p>
              </div>
            </div>
            <p className='video-content'>{item.reviewText}</p>
          </li>
        )}
      </ul>
      <InputModal handleSubmit={handleSubmit} commentRef={commentRef}/>
    </div>
  );
};

export default CategoryVideo;