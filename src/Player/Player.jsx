import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Player.css";
// import "react-h5-audio-player/lib/styles.less";
// import 'react-h5-audio-player/src/styles.scss' Use SASS

function Player({ src }) {
  const Player = () => (
    <AudioPlayer
      autoPlay
      src={src}
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );

  return <div id="player">{Player()}</div>;
}

export default Player;
