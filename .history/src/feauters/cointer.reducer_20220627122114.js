 import { createReducer } from "@reduxjs/toolkit/dist/createReducer"

 const initialState ={
    counter:0

 }
  export const plus = createAction('plus')


 const counterReducer = createReducer(initialState,  (builder) => {
builder.addCase('plus', (state, action) => {
 counter 
})
 })



 export default counterReducer