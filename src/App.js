import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import VideoDetail from './Components/VideoDetail';
import Feed from './Components/Feed';
import SearchFeed from './Components/SearchFeed';
import ChannelDetail from './Components/ChannelDetail';

const App = () => {
  return (
    <BrowserRouter> 
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App