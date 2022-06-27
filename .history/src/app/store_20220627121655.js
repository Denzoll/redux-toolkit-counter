import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feauters/cointer.reducer";

export const  store = configureStore({
    reducer:counterReducer
})