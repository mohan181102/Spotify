import axios from "axios";
import React, { useEffect, useId, useMemo, useState } from "react";
// import ac from "../spotify";
import { useSelector } from "react-redux";
import "./Body.css";
import { useDispatch } from "react-redux";
import { setplaylist } from "../Store/player";
import { useNavigate } from "react-router-dom";

function Body() {
  const [categorie, setcat] = useState(null);
  const [scrol, setscroll] = useState(false);
  const dumyarrray = [18];
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.playr.token);
  const navigate = useNavigate();
  let date = new Date().toJSON();

  console.log("token", accessToken);
  async function categories() {
    const data = await axios.get(
      "https://api.spotify.com/v1/browse/categories",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          country: "SE",
          limit: 50,
        },
      }
    );

    setTimeout(() => {
      setcat(data.data.categories.items);
    }, 1000);
  }

  if (categorie == null) {
    categories();
  }

  return (
    <>
      <div id="body" onScroll={(e) => scroll(e)}>
        <nav id="nav">
          <h1 id="bh1" className={scrol ? "bh1class" : ""}>
            Categories
          </h1>
        </nav>
        <ul id="bodyul">
          {categorie != null
            ? categorie.map((item, index) => {
                return (
                  <>
                    <li id="bodyli" key={date.toString()}>
                      <img
                        src={item.icons[0].url ? item.icons[0].url : ""}
                        id="image"
                        onClick={() => {
                          dispatch(setplaylist(item));
                          navigate("/playlist");
                        }}
                      />
                      <p id="bname">{item.name}</p>
                    </li>
                  </>
                );
              })
            : dumyarrray.map((item) => {
                // return <li id="dummyli"></li>;
              })}
        </ul>
      </div>
    </>
  );
}

export default Body;
