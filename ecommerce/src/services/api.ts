import axios from "axios";
import { Product } from "../types/types";

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})


type getProductType = {
    page: number,
    totalPages: number,
    itemsPerPage: number,
    totalItems: number,
    items: Product[]

}

export const getAllProducts =  async ():Promise<getProductType> => {
    const result = await api.get('/products')
    return result.data
}

const limit = window.innerWidth > 768 ? 9 : 8;


export const getProducts = async (pageActive:number):Promise<getProductType> => {

    const url = `/products?page=${pageActive}&limit=${limit}`;

    console.log(pageActive)
    try {
        const result = await api.get(url);
        return result.data;
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.message}`);
    }
    
}


export const getProductSearch = async (pageActive:number, filtersearch?: string):Promise<getProductType> => {
    
    let url = `/products?page=${pageActive}&limit=${limit}`;

    if (filtersearch) {
        url += `&name=${encodeURIComponent(filtersearch)}`;
    }

    try {
        const result = await api.get(url);
        return result.data;
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.message}`);
    }
    
}


export const getProductsFilter = async (pageActive:number, filterValue?: string):Promise<getProductType> => {
    
    let url = `/products?page=${pageActive}&limit=${limit}`;

    if (filterValue){
        url += `&filter=${encodeURIComponent(filterValue)}`
    }

    try {
        const result = await api.get(url);
        return result.data;
    } catch (error) {
        throw new Error(`Erro na requisição: ${error.message}`);
    }
    
}



