 import { createReducer } from "@reduxjs/toolkit/dist/createReducer"

 const initialState ={
    counter:0

 }


 const counterReducer = createReducer(initialState,  (builder) => {
builder.addCase('plus', (state, action) => {

})
 })