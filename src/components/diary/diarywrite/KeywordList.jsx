import React from 'react'

function KeywordList({keywords,setSelectKeywords,selectKeywords}) {
    const handleButtonClick = (keyword) => {
        setSelectKeywords((prev) => {
          if (prev.includes(keyword)) {
            return prev.filter((item) => item !== keyword);
          } 
          else {
            return [...prev, keyword];
          }
        });
    };
    
  return (
    <div className='keyword-wrap'>
        {keywords.map((item)=>(
          <>
            <button onClick={() => handleButtonClick(item.keyword)} className={`keyword ${selectKeywords.includes(item.keyword) ? 'selected' : ''}`}>{item.keyword}</button>
          </>
        ))}
    </div>
  )
}

export default KeywordList