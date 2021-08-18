import { HYDRATE } from "next-redux-wrapper";
import { USER_GUILDS_UPDATE } from "../../actions";

const initialState = {
    membros: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case USER_GUILDS_UPDATE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default reducer;