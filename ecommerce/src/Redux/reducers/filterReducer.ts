import { createSlice } from "@reduxjs/toolkit";



export const slice = createSlice({
    name: 'filterReducer',
    initialState: {
        price: '',
        
    },

    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload
        },

        
    }
});

export const {setPrice}  = slice.actions;
export default slice.reducer;