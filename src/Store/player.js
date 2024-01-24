import { createSlice } from "@reduxjs/toolkit";

const state = {
    data:null,
    token:null,
    playlist:null,
    id:null
}

const player = createSlice({
    name:"player",
    initialState:state,
    reducers:{
        setplayer:(state,action)=>{
            state.data=action.payload
        },         
        setplaylist:(state,action)=>{
            state.playlist=action.payload
        },
        setoken:(state,action)=>{
            state.token=action.payload
        },
        setplaylistid:(state,action)=>{
            state.id=action.payload
        }
        
    }
})

export default player.reducer;
export const {setplayer , setplaylist, setoken, setplaylistid} = player.actions