import React, { useEffect, useRef, useState } from "react";
import "./Player.css";

function Player({ src }) {
  const audio = useRef(null);
  const [value, setvalue] = useState(null);
  const [playstate, setplaystate] = useState(false);

  // CREATE SONGSTATUS BAR

  setTimeout(() => {
    if (audio.current.currentTime <= audio.current.duration) {
      setvalue(
        (Math.floor(audio.current.currentTime) * 100) /
          Math.floor(audio.current.duration)
      );
    } else {
      return;
    }
  }, 1000);

  // LOAD EVERY SONG SELECTION

  useEffect(() => {
    audio.current.load();
    setplaystate(true);
    if (src) {
      if (src.preview_url == undefined || null) {
        alert("preview now present");
      }
    }
  }, [src]);

  // MANAGE STATE ON PLAY AND PAUSE BUTTON

  function statemanage() {
    if (audio != null && playstate == false) {
      audio.current.play();
      setplaystate(true);
    }

    if (audio != null && playstate == true) {
      audio.current.pause();
      setplaystate(false);
    }
  }

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

      <div>
        <input type="range" value={value} />
        <button onClick={() => statemanage()}>
          {playstate ? "Pause" : "Play"}
        </button>
      </div>

      <audio
        id="audio"
        ref={audio}
        src={src ? src.preview_url : ""}
        autoPlay
      ></audio>
    </div>
  );
}

export default Player;
