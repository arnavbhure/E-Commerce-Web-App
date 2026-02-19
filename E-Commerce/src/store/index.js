import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./productsSlice";

const EcomStore = configureStore({
    reducer : {
        products : ProductSlice.reducer,
    }
})

export default EcomStore;