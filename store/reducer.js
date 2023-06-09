import {combineReducers} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";


export const reducer = combineReducers({
auth: authSlice,
});