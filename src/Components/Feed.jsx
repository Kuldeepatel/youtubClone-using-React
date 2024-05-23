import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import SideBar from "./SideBar";
import "../CSS/Feed.css";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <div className="feed-container">
      <div className="sidebar-container">
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
      
      </div>

      <div className="videos-container">
        <h4 className="category-title">
          {selectedCategory} 
        </h4>

        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
