export { removetvShow } from "../reducers/tvShowSlice"
import axios from "../../utils/axios"
import { loadtvShow }  from "../reducers/tvShowSlice"
   
export const asynctvload = (id) => async (dispatch,getState)=>{
    try {
        const detail = await axios.get(`/tv/${id}`)
        const externalid = await axios.get(`/tv/${id}/external_ids`)
        const recommendations = await axios.get(`/tv/${id}/recommendations`)
        const similar = await axios.get(`/tv/${id}/similar`)
        const video = await axios.get(`/tv/${id}/videos`)
        const watchProvider = await axios.get(`/tv/${id}/watch/providers`) 

         let ultimateDetails = {
            detail: detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar:similar.data.results,
            video:video.data.results.find(m=>m.type === "Trailer" ) || null,
            watchProvider: watchProvider.data.results.IN,
         }
         dispatch(loadtvShow(ultimateDetails));
        
        
    } catch (error) {
        console.log("Error",error)
    }
}