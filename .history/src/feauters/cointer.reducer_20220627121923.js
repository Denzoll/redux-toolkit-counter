 import { createReducer } from "@reduxjs/toolkit/dist/createReducer"

 const initialState ={
    counter:0

 }
 const plus = createAction('')


 const counterReducer = createReducer(initialState,  (builder) => {
builder.addCase('plus', (state, action) => {

})
 })



 export default counterReducer