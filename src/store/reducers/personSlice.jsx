import { createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";



const initialState = {
    info:null
}

export const personSlice = createSlice({
    name:"person",
    initialState,
    reducers:{
        loadperson:(state,action)=>{
            state.info = action.payload;
        },
        removeperson:(state,action)=>{
            state.info = Null
        },
    },
})

export const {loadperson,removeperson} = personSlice.actions

export default personSlice.reducer