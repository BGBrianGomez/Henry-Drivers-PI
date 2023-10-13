import { GET_BYNAME } from "./actionTypes";
import axios from "axios"

export const getByName = (name)=>{
    return async function(dispatch){
        try {
            let json = await axios.get("http://localhost:3001/drivers?name=" + name);
            dispatch({
                type: GET_BYNAME,
                payload: json.data,
            })
        } catch (error) {
            throw Error({error: error.message})
        }
    }
}