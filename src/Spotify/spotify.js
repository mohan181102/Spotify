import { useState } from "react";
import { useDispatch } from "react-redux";
import { setoken } from "./Store/player";

const client_id = "6e1d52e766074d98809007acc8af393e";
const client_secret = "016112708a294dcbaaaccb94629a0918";

const ac = function actoken() {
  const [token, settoken] = useState("");
  const dispatch = useDispatch();
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body:"grant_type=client_credentials&client_id=" +client_id +"&client_secret=" +client_secret,
  })
  .then((res)=>res.json())
  .then((data)=>settoken(data.access_token))

  dispatch(setoken(token))
  return token;
}

ac();


// client id
// 6e1d52e766074d98809007acc8af393e
// secret id
// 016112708a294dcbaaaccb94629a0918
