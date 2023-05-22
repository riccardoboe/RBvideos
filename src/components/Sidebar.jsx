import React from "react";
import { Stack, Divider } from "@mui/material";
import {
  categories1,
  categories2,
  categories3,
  categories4,
  categories5,
} from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >

    {categories1.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && "#C0FF04",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "#C0FF04",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "white",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}

    <Divider sx={{ borderBottomWidth: "1px", background: "#3d3d3d" }} />

    {categories2.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && "#C0FF04",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "#C0FF04",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "white",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}

    <Divider sx={{ borderBottomWidth: "1px", background: "#3d3d3d" }} />

    {categories3.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && "#C0FF04",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "#C0FF04",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "white",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}

    <Divider sx={{ borderBottomWidth: "1px", background: "#3d3d3d" }} />

    {categories4.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && "#C0FF04",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "#C0FF04",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "white",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}

    <Divider sx={{ borderBottomWidth: "1px", background: "#3d3d3d" }} />

    {categories5.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && "#C0FF04",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "#C0FF04",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectedCategory ? "#1a1a1a" : "white",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
