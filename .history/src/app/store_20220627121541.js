import { configureStore } from "@reduxjs/toolkit";
import {counterReducer}

export const  store = configureStore({
    reducer:counterReducer
})