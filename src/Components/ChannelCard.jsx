import React from 'react';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';
import '../CSS/ChannelCard.css'; 

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div className={`channel-card-container ${window.innerWidth >= 960 ? 'md' : ''}`} style={{ marginTop }}>
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div className="channel-card-content">
        <img src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title} className="channel-card-media" />
        <div className="channel-card-title">
          <h6>{channelDetail?.snippet?.title}</h6>
        </div>
        {channelDetail?.statistics?.subscriberCount && (
          <div className="channel-card-subscribers">
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </div>
        )}
      </div>
    </Link>
  </div>
);

export default ChannelCard;
