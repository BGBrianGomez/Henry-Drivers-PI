import { GET_BYNAME } from "../Actions/actionTypes";

const initialState = {
    allDrivers: [],
    allTeams: [],
    filtredDrivers: []
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_BYNAME: return{...state, filtredDrivers: action.payload}
    }
}

export default reducer;