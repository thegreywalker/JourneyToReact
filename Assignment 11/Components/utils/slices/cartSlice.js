import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop(); // Experimental as the UI isn't defined yet
        },
        clearCart: (state) => {
            state.items = [];
        }
    }
})

export default cartSlice.reducer;
export const {addItem, removeItem, clearCart} = cartSlice.actions;