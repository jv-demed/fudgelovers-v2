import { configureStore } from '@reduxjs/toolkit';
import shoppingCartReducer from './shoppingSlice';

export default configureStore({
    reducer: {
        shoppingCart: shoppingCartReducer,
    }
})