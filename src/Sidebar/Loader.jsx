import React from "react";
import "./loader.css";

function Load({ display }) {
  return display == true ? (
    <>
      <div id="loader" />
    </>
  ) : null;
}

export default Load;
