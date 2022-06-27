import { createAction } from "@reduxjs/toolkit/"
import { createReducer } from "@reduxjs/toolkit"

 const initialState ={
    counter:0

 }
  export const plus = createAction('plus')
  export const minus = createAction('minus')
  export const zero = createAction


 const counterReducer = createReducer(initialState,  (builder) => {
builder.addCase(plus, (state, action) => {
 state.counter+=1
})
 .addCase(minus,(state) => {
   if(state.counter > 0) {
   state.counter -=1
   }
 })
 .addCase()
})
 



 export default counterReducer 