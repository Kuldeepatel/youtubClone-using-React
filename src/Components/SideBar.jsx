import React from "react";
import { categories } from "../utils/constant";
import "../CSS/SideBar.css";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <button
        className={`category-btn ${selectedCategory === category.name ? "selected" : ""}`}
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <span className="category-icon" style={{ color: selectedCategory === category.name ? "white" : "red" }}>
          {category.icon}
        </span>
        <span className="category-name" style={{ opacity: selectedCategory === category.name ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </div>
);

export default SideBar;
