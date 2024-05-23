import React from "react";
import { Link } from "react-router-dom";
import logo from '../Assets/youtub_logo.png'
import SearchBar from "./SearchBar";
import "../CSS/Navbar.css"; 

const Navbar = () => (
    <div className="navbar">
    <Link to="/">
      <img src={logo} alt="logo" className="navbar-logo" />
    </Link>
    <h1 className="header">Video Player</h1>
    <SearchBar />
  </div>
);

export default Navbar;
