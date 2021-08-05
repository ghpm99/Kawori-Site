import { BACK_END_UPDATE_STATUS } from "..";

export const statusUpdate = (status) => ({
    type: BACK_END_UPDATE_STATUS,
    payload: status,
});