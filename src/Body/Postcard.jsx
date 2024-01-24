import React from "react";
import "./Post.css";
function Postcard({ img, name }) {
  return (
    <div id="imagediv">
      <img src={img} id="postimg" />
      <p id="postname">{name}</p>
    </div>
  );
}

export default Postcard;
