import { configureStore } from '@reduxjs/toolkit' ;

import cartReducer from '../Redux/reducers/cartReducer';
import filterReducer from '../Redux/reducers/filterReducer';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer
        
    }
});

export type RootState = ReturnType<typeof store.getState>;