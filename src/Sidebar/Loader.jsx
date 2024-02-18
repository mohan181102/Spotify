import React from "react";
import "./loader.css";

function Load({ display }) {

  return display ? (
    <>
      <div id="loader" />
    </>
  ) : "";
}

export default Load;
