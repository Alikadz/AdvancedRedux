import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import uiRedcuer from './ui-slice';

const store = configureStore({
    reducer: { 
        cart: cartReducer, 
        ui: uiRedcuer
    }
})

export default store;