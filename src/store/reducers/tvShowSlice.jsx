import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    info:null
}

export const tvShowSlice = createSlice({
    name:"tvShow",
    initialState,
    reducers:{
        loadtvShow:(state,action)=>{
            state.info = action.payload;
        },
        removetvShow:(state,action)=>{
            state.info = Null
        },
    },
})

export const {loadtvShow,removetvShow} = tvShowSlice.actions

export default tvShowSlice.reducer