import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
    name : "orders",
    initialState : {
        orderItems : [],
        orderPlacedAt : Date.now(),
    },
    reducers : {
        addToOrders : (state , action) =>{       
            state.unshift(action.payload);
        },
    }
})

export default OrderSlice;
export const OrderSliceActions = OrderSlice.actions;