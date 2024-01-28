import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.css";
// import "react-h5-audio-player/lib/styles.less";
// import 'react-h5-audio-player/src/styles.scss' Use SASS

function Player({ src }) {
  return (
    <div id="player">
      {
        <AudioPlayer
          autoPlay
          src={src}
          style={{
            backgroundColor: "black",
            color: "white",
          }}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      }
    </div>
  );
}

export default Player;
