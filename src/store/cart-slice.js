import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartIsVisible: true }

const cartSlice = createSlice({
    name:'cart',
    initialState: initialState,
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;