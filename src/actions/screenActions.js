import {
    MOBILE_SCREEN_SIZE,
    TABLET_SCREEN_SIZE,
    LAPTOP_SCREEN_SIZE,
    DESKTOP_SCREEN_SIZE,

} from "../constants/screenConstants";

export const mobileAction = (data) =>({
    type: MOBILE_SCREEN_SIZE,
    payload: data,
});
export const tabletAction = (data) =>({
    type: TABLET_SCREEN_SIZE,
    payload: data,
});
export const laptopAction = (data) =>({
    type: LAPTOP_SCREEN_SIZE,
    payload: data,
});
export const desktopAction = (data) =>({
    type: DESKTOP_SCREEN_SIZE,
    payload: data,
});
