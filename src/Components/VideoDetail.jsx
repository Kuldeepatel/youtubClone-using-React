import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "../CSS/VideoDetail.css"; 

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className="video-detail-container">
      <div className="video-player-container">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
        <div className="video-title">{title}</div>
        <div className="video-info">
          <Link to={`/channel/${channelId}`} className="channel-link">{channelTitle}</Link>
          <div className="video-stats">
            <div>{parseInt(viewCount).toLocaleString()} views</div>
            <div>{parseInt(likeCount).toLocaleString()} likes</div>
          </div>
        </div>
      </div>
      <div className="related-videos">
      </div>
    </div>
  );
};

export default VideoDetail;
