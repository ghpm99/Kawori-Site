import { HYDRATE } from "next-redux-wrapper";
import { USER_GEAR_UPDATE } from "../../actions";

const initialState = {    
    gears:[],    
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case USER_GEAR_UPDATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default reducer;