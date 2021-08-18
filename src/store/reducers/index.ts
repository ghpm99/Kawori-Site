import { combineReducers } from "redux";
import settingsReducer from "./users/settings";
import statusReducer from "./backend/index";
import gearReducer from "./gear/index";
import guildReducer from "./guild/index";
import configReducer from "./config/index";

export default combineReducers({
  settings: settingsReducer,
  status: statusReducer,
  gears: gearReducer,
  guilds: guildReducer,
  config: configReducer,
});