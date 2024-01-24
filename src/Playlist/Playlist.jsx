import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./playlist.css";
import axios from "axios";

function Playlist() {
  let data = useSelector((state) => state.playr.playlist);
  let accessToken = useSelector((state) => state.playr.token);
  const [play, setplay] = useState(null);
  const [value, setvalue] = useState(null);
  const [error, seterror] = useState(null);
  console.log("playlis tok:- ", accessToken);
  if (value == null) {
    // settoke(accessToken);
    setvalue(data.name);
  }

  async function playlist(name) {
    let data = await axios.get(
      `https://api.spotify.com/v1/browse/categories/${name}/playlists`,
      {
        headers: {
          Authorization: ` Bearer ${accessToken}`,
        },
      }
    );

    // .then((data) => (play == [] ? setplay(data.playlists.items) : ""));

    // console.log("reach function");
    play == null ? setplay(data.data.playlists.items) : "";
    // console.log("plaf:- ", play);
  }

  if (error != null) {
    console.log(error);
  }

  setTimeout(() => {
    playlist(value);
  }, 1000);

  return (
    <>
      <div id="playlistbody">
        <nav id="pnav">
          <h1 id="ph1"> All Playlist</h1>
        </nav>
        <ul id="playlistul">
          {play != null
            ? play.map((item, index) => {
                return (
                  <>
                    <li id="playli" key={Date.now()}>
                      <img
                        src={item.images[0].url ? item.images[0].url : ""}
                        id="pimage"
                        onClick={() => {
                          // dispatch(setplaylist(item));
                          // navigate("/");
                        }}
                      />
                      <p id="playlistname">{item.name}</p>
                    </li>
                  </>
                );
              })
            : "loading.."}
        </ul>
      </div>
    </>
  );
}

export default Playlist;
