import todoReducers from "./todoReducer";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    todoReducers
})
export default rootReducer;