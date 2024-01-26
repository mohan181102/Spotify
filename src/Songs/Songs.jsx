import React, { useState } from "react";
import "./Songs.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setplayer } from "../Store/player";
import { useNavigate } from "react-router-dom";

function Songs() {
  const playlistid = useSelector((state) => state.playr.id);
  const accessToken = useSelector((state) => state.playr.token);
  const [fulldata, setfulldata] = useState(null);
  const [songdata, setsongdata] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("plaiid:- ", playlistid);
  console.log("playlis tok:- ", accessToken);

  if (playlistid == null) {
    navigate("/");
  }

  async function playlistsosng() {
    let data = await axios
      .get(`https://api.spotify.com/v1/playlists/${playlistid}`, {
        headers: {
          Authorization: ` Bearer ${accessToken}`,
        },
      })
      .catch((error) => seterror(error));
    console.log(data);
    fulldata == null ? setfulldata(data) : "";
    if (songdata == null) {
      setsongdata(data.data.tracks.items);
    }
  }

  playlistsosng();
  // console.log("songdata:- ", songdata);

  return songdata != null ? (
    <>
      <div
        id="songbody"
        style={{
          backgroundImage: `linear-gradient(black,green)`,
          // backgroundColor: "#FFFFFf",
        }}
      >
        <h1 id="playlist_name">
          {fulldata.data.name}
          <img id="playlistmainimg" src={fulldata.data.images[0].url} />
        </h1>
        <ul id="playlistsongs">
          {songdata.map((item, index) => {
            return (
              <li
                id="songli"
                key={item.track.id}
                onClick={() => {
                  dispatch(setplayer(item.track.preview_url));
                }}
              >
                <p id="index">{index + 1}</p>
                <img
                  id="songimg"
                  src={
                    item.track.album.images[0].url
                      ? item.track.album.images[0].url
                      : ""
                  }
                />
                <p id="songname">{item.track.name}</p>
                <a
                  id="fullsong"
                  href={
                    item.track.external_urls.spotify
                      ? item.track.external_urls.spotify
                      : ""
                  }
                  target="_blank"
                >
                  <button id="fullsongbtn">&#127925;</button>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  ) : (
    "loading..."
  );
}

export default Songs;
