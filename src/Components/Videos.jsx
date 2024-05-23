import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";
import "../CSS/Videos.css"; 

const Videos = ({ videos, direction = "row" }) => {
  if (!videos?.length) return <Loader />;

  return (
    <div className={`videos-container ${direction === 'column' ? 'column' : 'row'}`}>
      {videos.map((item, idx) => (
        <div key={idx} className="video-item">
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
