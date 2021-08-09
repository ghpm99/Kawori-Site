import { CONFIG_BATTLEMODE_UPDATE, CONFIG_CLASS_UPDATE, CONFIG_TRINA_UPDATE } from "..";

export const battleModeupdate = (battleMode) => ({
    type: CONFIG_BATTLEMODE_UPDATE,
    payload: battleMode,
});

export const classesUpdate = (classes) => ({
    type: CONFIG_CLASS_UPDATE,
    payload: classes,
});

export const trinaUpdate = (trina) => ({
    type: CONFIG_TRINA_UPDATE,
    payload: trina,
});