import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { BACK_END_UPDATE_STATUS } from "../../actions";

export interface Status {
    status: string,
    cmdReceived: number,
    guildCount: number,
    userCount: number,
}

const initialState = {
    status: "Offline",
    cmdReceived: 0,
    guildCount: 0,
    userCount: 0,
} as Status;

const reducer = (state: Status = initialState, action : AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.status };
        case BACK_END_UPDATE_STATUS:
            return { ...state, status: action.payload };
        default:
            return state;
    }
};

export default reducer