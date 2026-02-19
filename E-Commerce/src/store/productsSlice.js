import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name : "products",
    initialState : {items : []},
    reducers :{
        addInitialProducts : (state , action) =>{
            state.items = action.payload;
        },
    }
})

export default ProductSlice;
export const ProductSliceActions = ProductSlice.actions;