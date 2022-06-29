import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'shoppingCart',
    initialState: {
        items: []
    },
    reducers: {
        addItem(state, { payload }){
            return {...state, items: payload}
        }
    }
})

export const { addItem } = slice.actions;
export const selectShoppingCart = state => state.shoppingCart;
export default slice.reducer;