import { createAction } from "@reduxjs/toolkit/dist/createAction"

 const initialState ={
    counter:0

 }
  export const plus = createAction('plus')


 const counterReducer = createReducer(initialState,  (builder) => {
builder.addCase(plus, (state, action) => {
 state.counter+=1
})
 })



  counterReducer