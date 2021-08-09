import { USER_GEAR_UPDATE } from "..";

export const gearUpdate = (gear) => ({
  type: USER_GEAR_UPDATE,
  payload: gear,
});