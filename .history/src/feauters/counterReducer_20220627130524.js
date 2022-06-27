import { createAction } from "@reduxjs/toolkit/"
import { createReducer } from "@reduxjs/toolkit"

 const initialState ={
    counter:0

 }
  export const plus = createAction('plus')


 const counterReducer = createReducer(initialState,  (builder) => {
builder.addCase(plus, (state, action) => {
 state.counter+=1
 .addCase(plus,(state))
})
 })



 export default counterReducer 