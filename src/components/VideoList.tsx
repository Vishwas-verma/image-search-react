import React from "react";
import VideoItems from "./VideoItems";

const VideoList = (props: any) => {

  const renderedList = props.videos.map((video: any) => {
    return <VideoItems
      onVideoSelect = {props.onVideoSelect}
      video = {video}/>
  });
  return (
    <div className = {"ui relaxed divided list"}>
      {renderedList}</div>
  );
};

export default VideoList;