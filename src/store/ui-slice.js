import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalQuantiy:0
}

const uiSlice = createSlice({
    name:'ui',
    initialState: initialState,
    reducers:{
        addItemToCart(state, action){
            const newItem = action.payload;

            const existingItem = state.items.find((item) => item.id === newItem.id)

            if(!existingItem){
                state.items.push({
                    itemId:newItem.id,
                    price:newItem.price,
                    quantity:newItem.quantity,
                    totalPrice:newItem.price
                })
            }
            else{
                state.quantity++;
                existingItem.totalPrice = newItem.price;
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;

            const existingItem = state.items.find((item) => item.id === id);
            if(existingItem === 1){
                state.items = state.items.filter((item)=> item.id !== id);
            }
            else{
                existingItem.quantity--;
            }
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;