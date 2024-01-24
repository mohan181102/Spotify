import Sidebar from "./Sidebar/Sidebar";
import "./App.css";
import { useSelector } from "react-redux";
import Player from "./Player/Player";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setoken } from "./Store/player";

const client_id = "6e1d52e766074d98809007acc8af393e";
const client_secret = "016112708a294dcbaaaccb94629a0918";

// client id
// 6e1d52e766074d98809007acc8af393e
// secret id
// 016112708a294dcbaaaccb94629a0918

export default function token() {
  const [atoken, setatoken] = useState("");
  const dispatch = useDispatch();
  const [condition, setcondition] = useState(true);
  const stoat = useSelector((state) => state.playr.token);
  const [fetchcheck, setfechcheck] = useState(false);

  async function fetchload() {
    let data = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        client_id +
        "&client_secret=" +
        client_secret,
    })
      .then((res) => res.json())
      .then((data) => data.access_token);
    dispatch(setoken(data));
  }

  if (condition == true) {
    fetchload();
  }

  setInterval(() => {
    setcondition(false);
    // console.log("setinter");
  }, 5000);
  console.log(stoat);

  let uri = useSelector((state) => state.playr.data);

  return (
    <div id="app">
      <Sidebar />,
      <Outlet />
      <Player src={uri} />
    </div>
  );
}
