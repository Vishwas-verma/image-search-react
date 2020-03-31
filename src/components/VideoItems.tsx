import React from "react";
import "./VideoItem.css";

const VideoItems = (props: any) => {
  return (
    <div onClick = {() => props.onVideoSelect(props.video)} className = {"video-item item"}>
      <img className = {"ui image"} src = {props.video.snippet.thumbnails.medium.url} alt={""}/>
      <div className = {"content"}>
        <div className = {"header"}>{props.video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItems;