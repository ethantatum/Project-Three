import { SET_SELECTED_CLASS } from "./types";

export const selectClass = (classRoom) => {
    // console.log("REDUXXXXXX: " + classRoom._id);
    const classObj = {...classRoom.data};
    console.log(classObj);
    return {
        type: SET_SELECTED_CLASS,
        payload: classObj
    }
}