import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addItem: (state, product) => {
            state.value.push(product);
        },
        removeItem: state => {
        state.value -= 1
        }
    }
})

export default cartSlice;
export const { addItem, removeItem } = cartSlice.actions;