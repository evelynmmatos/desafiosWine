import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/types";


const storedProdutos: string | null = localStorage.getItem('produtos');
const listaProdutos: Product[] = storedProdutos ? JSON.parse(storedProdutos) : [];

export const slice = createSlice({
    name: 'cartReducer',
    initialState: {
        product: listaProdutos
    },

    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        }
    }
});

export const {setProduct}  = slice.actions;
export default slice.reducer;