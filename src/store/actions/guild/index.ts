import { USER_GUILDS_UPDATE } from "..";

export const guildsUpdate = (guilds) => ({
  type: USER_GUILDS_UPDATE,
  payload: guilds,
});