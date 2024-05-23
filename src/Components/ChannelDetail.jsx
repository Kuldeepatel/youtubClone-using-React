import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Videos from './Videos';
import ChannelCard from "./ChannelCard";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import "../CSS/ChannelDetail.css";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        setChannelDetail(channelData?.items[0]);

        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(videosData?.items);
      } catch (error) {
        console.error("Error fetching channel data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="channel-detail-container">
      <div className="channel-header">
        <div className="header-background" />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </div>
      <div className="videos-section">
        <div className="videos-content">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
