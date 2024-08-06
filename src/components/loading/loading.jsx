import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = ({color,anlyst,size}) => {
  return (
    <div className="loading-wrap">
      <h3 className="title">{anlyst ? "" : '잠시만 기다려주세요...'}</h3>
       {color? <SyncLoader color={color} size={size}/> :<SyncLoader size={10}/>}
     
    </div>
  );
};

export default Loading;
