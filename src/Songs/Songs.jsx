import React from "react";
import "./Songs.css";
import { useSelector } from "react-redux";

function Songs() {
  const playlistid = useSelector((state) => state.playr.id);
  console.log(playlistid);
  return (
    <>
      <div id="songbody"> </div>
    </>
  );
}

export default Songs;
