export {removemovie} from "../reducers/MovieSlice"
import axios from "../../utils/axios"
import {loadmovie}  from "../reducers/MovieSlice"
   
export const asyncmovieload = (id) => async (dispatch,getState)=>{
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const video = await axios.get(`/movie/${id}/videos`)
        const watchProvider = await axios.get(`/movie/${id}/watch/providers`) 

         let ultimateDetails = {
            detail: detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            video:video.data.results.find(m=>m.type === "Trailer" ) || null,
            watchProvider: watchProvider.data.results.IN,
         }
         dispatch(loadmovie(ultimateDetails));
        
        
    } catch (error) {
        console.log("Error",error)
    }
}