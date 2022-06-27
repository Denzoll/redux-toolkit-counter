import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feauters/counterReducer";

export const  store = configureStore({
    reducer:counterReducer
})