import { HYDRATE } from "next-redux-wrapper";
import { CONFIG_BATTLEMODE_UPDATE, CONFIG_CLASS_UPDATE, CONFIG_TRINA_UPDATE, USER_GEAR_UPDATE } from "../../actions";

const initialState = {
    battlemode: [],
    classes: [],
    trina: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload };
        case CONFIG_BATTLEMODE_UPDATE:
            return { ...state, battlemode: action.payload };
        case CONFIG_CLASS_UPDATE:
            return { ...state, classes: action.payload };
        case CONFIG_TRINA_UPDATE:
            return { ...state, trina: action.payload };
        default:
            return state;
    }
};

export default reducer;