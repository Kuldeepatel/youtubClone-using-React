import React from 'react';
import { Link } from "react-router-dom"; 
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constant";
import '../CSS/VideoCard.css'; 

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <div className={`video-card ${window.innerWidth >= 960 ? 'md' : window.innerWidth >= 600 ? 'sm' : ''}`}>
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <img
        src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        className={`video-card-media ${window.innerWidth >= 600 ? 'sm' : ''}`}
      />
    </Link>
    <div className="video-card-content">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <div className="video-card-title">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </div>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <div className="video-card-channel">
          {snippet?.channelTitle || demoChannelTitle}
        </div>
      </Link>
    </div>
  </div>
);

export default VideoCard;
