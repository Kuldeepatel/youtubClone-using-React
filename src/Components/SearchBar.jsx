import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/SearchBar.css';
import searchIcon from '../Assets/SearchIcon.gif';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <form className="search-bar-container" onSubmit={onhandleSubmit}>
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search-button" aria-label="search">
        <img src={searchIcon} alt="search" />
      </button>
    </form>
  );
};

export default SearchBar;
