import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import axios from "axios";
import { setplayer } from "../Store/player";
import { useDispatch } from "react-redux";

function Sidebar() {
  const accessToken = useSelector((state) => state.playr.token);
  let screenwidth = window.screen.width;
  const [inputdata, setinputdata] = useState(null);
  const [showdata, setdata] = useState(null);
  const dispatch = useDispatch();

  async function searchfunction() {
    document.getElementById("ul2").style.display = "none";
    document.getElementById("searchpage").style.display = "block";
    const data = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: `${inputdata}`,
        type: "track",
      },
    });

    if (data !== (undefined || null)) {
      setdata(data.data.tracks.items);
    } else {
      setdata([]);
    }

    if (inputdata.length == 1) {
      document.getElementById("searchpage").style.display = "none";
      document.getElementById("ul2").style.display = "block";
    }
  }

  function serchbarscale() {
    console.log("clicked   ");
    document.getElementById("sidebar").style.scale = 1;
  }

  return (
    <>
      <button id="serchbtn" onClick={() => serchbarscale()}>
        &#128269;
      </button>

      <div id="sidebar">
        <button id="Home">
          Home
          <button
            id="cross"
            onClick={() => {
              document.getElementById("sidebar").style.scale = 0;
            }}
          >
            &#x2717;
          </button>
        </button>
        <input
          id="input"
          type="Text"
          placeholder="Search.."
          onChange={(e) => {
            setinputdata((prev) => (prev = e.target.value)), searchfunction();
          }}
          onLoad={() => {
            console.log("loaded..");
            document.getElementById("input").focus();
          }}
        />
        <ul className="ul" id="searchpage">
          {showdata != null
            ? showdata.map((item) => {
                return item !== undefined ? (
                  <>
                    <li className="persong" key={item.id}>
                      <img
                        id="image1"
                        alt={""}
                        src={
                          item.album.images[0] !== undefined
                            ? item.album.images[0].url
                            : ""
                        }
                        onClick={() => {
                          dispatch(setplayer(item.preview_url));
                        }}
                      />

                      <p id="name">{item.name}</p>
                      <button id="fullsongbtn">
                        <a
                          id="fullsong"
                          target="_blank"
                          href={item.external_urls.spotify}
                        >
                          &#127925;
                        </a>
                      </button>
                    </li>
                  </>
                ) : (
                  "loading.. "
                );
              })
            : "No data"}
        </ul>
        <ul className="ul2" id="ul2">
          <h2 id="serchword">Search for song..</h2>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
