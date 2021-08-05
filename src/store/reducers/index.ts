import { combineReducers } from "redux";
import settingsReducer from "./users/settings";
import statusReducer from "./backend/index"

export default combineReducers({
  settings: settingsReducer,
  status: statusReducer,
});