import { configureStore } from "@reduxjs/toolkit";
import player from "./player";

const store = configureStore({
    reducer:{
        playr:player
    }
})

export default store