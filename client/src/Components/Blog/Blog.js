import React from "react";
import "./Blog.scss";
import blog from "./img/blog.png";

function Blog() {
  return (
    <div className="blog">
      <img src={blog} alt="" className="blog-image" />
    </div>
  );
}

export default Blog;
