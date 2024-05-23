import React from "react";
import { categories } from "../utils/constant";
import "../CSS/SideBar.css";

const SideBar = ({ selectedCategory, setSelectedCategory }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <button
        className={`category-btn ${category.name === selectedCategory ? "selected" : ""}`}
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
      >
        <span className="category-icon" style={{ color: category.name === selectedCategory ? "white" : "red" }}>
          {category.icon}
        </span>
        <span className="category-name" style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </div>
);

export default SideBar;
