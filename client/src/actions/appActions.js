import { SET_SELECTED_CLASS } from "./types";

export const selectClass = (classRoom) => {
    console.log("REDUXXXXXX: " + classRoom._id);
    return {
        type: SET_SELECTED_CLASS,
        payload: classRoom
    }
}