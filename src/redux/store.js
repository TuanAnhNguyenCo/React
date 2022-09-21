import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "../views/Example/jobsSlice";
import contactSlice from "../views/Contact/contactSlice";
import productSlice from "../views/product/productSlice";



const store = configureStore({
    reducer: {
        jobs: jobsSlice.reducer,
        counter: contactSlice,
        products: productSlice.reducer
    }
})

export default store