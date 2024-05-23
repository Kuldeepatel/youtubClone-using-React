import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videos from "./Videos";
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
      <div className={`video-detail-stack ${window.innerWidth >= 960 ? 'row' : 'column'}`}>
        <div className="video-player-container">
          <div className="video-player-wrapper">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <div className="video-title">
              {title}
            </div>
            <div className="video-info">
              <Link to={`/channel/${channelId}`} className="channel-link">
                <div>
                  {channelTitle}
                </div>
              </Link>
              <div className="video-stats">
                <div>{parseInt(viewCount).toLocaleString()} views</div>
                <div>{parseInt(likeCount).toLocaleString()} likes</div>
              </div>
            </div>
          </div>
        </div>
        <div className="related-videos">
          <Videos videos={videos} direction="column" />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
