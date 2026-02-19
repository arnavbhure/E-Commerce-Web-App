import { createSlice } from "@reduxjs/toolkit";

const CartItemsSlice = createSlice({
    name : "cart",
    initialState : [] ,
    reducers : {
        removeFromCart : (state , action) => {
           return state.filter((item) => item.id!==action.payload);
            
        },
        addToCart : (state , action) => {
            return [action.payload , ...state];
        },
    } 
});

export default CartItemsSlice;
export const CartItemsActions = CartItemsSlice.actions;
