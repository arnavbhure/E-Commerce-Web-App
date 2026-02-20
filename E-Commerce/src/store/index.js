import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productsSlice";
import FetchDoneSlice from "./FetchDoneSlice";
import CartItemsSlice from "./CartItems";
import OrderSlice from "./OrdersSlice";

const EcomStore = configureStore({
    reducer : {
        products : ProductSlice.reducer,
        fetch : FetchDoneSlice.reducer,
        cart : CartItemsSlice.reducer,
        orders : OrderSlice.reducer,
    }
})

export default EcomStore;