import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
import message from "./message";

export default combineReducers({
    posts,
    auth,
    message
});