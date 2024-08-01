import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading-wrap">
      <h3 className="title">잠시만 기다려주세요...</h3>
        <SyncLoader size={10}/>
     
    </div>
  );
};

export default Loading;
