import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import "../CSS/SearchFeed.css";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <div className="search-feed-container">
      <h4 className="search-title">
        Search Results for <span className="highlight">{searchTerm}</span> videos
      </h4>
      <div className="videos-section">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
