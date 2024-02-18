import React, { useEffect, useRef, useState } from "react";
import "./Player.css";

function Player({ src }) {
  const audio = useRef(null);

  useEffect(() => {
    audio.current.load();
    if (src) {
      if (src.preview_url == undefined || null) {
        alert("preview now present");
      }
    }
    console.log(src);
  }, [src]);

  // useEffect(() => {});
  return (
    <div id="player">
      <img
        id="img-on-player"
        src={
          src
            ? src.album.images[0] !== undefined
              ? src.album.images[0].url
              : ""
            : ""
        }
      />
      {/* <input value={} type="range" /> */}
      <audio
        id="audio"
        ref={audio}
        controls
        src={src ? src.preview_url : ""}
        autoPlay
      ></audio>
    </div>
  );
}

export default Player;
