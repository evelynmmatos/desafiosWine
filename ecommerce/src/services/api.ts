/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import { Product } from "../types/types";
import { getAllProductsFile, getProductsFile } from "./mockProducts";
import Mockproducts from "./Products";

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

export const getAllProducts =  async ():Promise<any> => {
   
    try{
        const result = await api.get('/products')
        return result.data
    }catch (error){
        const listProducts = await getAllProductsFile()
        const data = {
            page: 1,
            totalPages: 1,
            itemsPerPage: listProducts.length,
            totalItems: listProducts.length,
            items: listProducts
        }

        return data
       
    }
    
}



//Definição limite de busca entre Desktop(9) e Mobile(8)
const limit = window.innerWidth > 768 ? 9 : 8;


export const getProducts = async (pageActive:number):Promise<any> => {

    const url = `/products?page=${pageActive}&limit=${limit}`;

    
    try {
        const result = await api.get(url);
        return result.data;
    } catch (error) {

        const listProducts =  getProductsFile(limit, pageActive)
        

        const data = {
            page: pageActive,
            totalPages:Math.round(Mockproducts.length / limit),
            itemsPerPage: listProducts.length,
            totalItems: Mockproducts.length,
            items: listProducts
        }

        return data
    
      
    }
    
}


export const getProductsSearch = async (pageActive:number, keyWord: string, keyPrice: string):Promise<getProductType> => {
    
    let url = `/products?page=${pageActive}&limit=${limit}`;

    if (keyWord != 'all'){
        
        url += `&name=${encodeURIComponent(keyWord)}`;
    }

    if (keyPrice != 'all'){
        
        url += `&filter=${encodeURIComponent(keyPrice)}`
    }

    

    try {
        const result = await api.get(url);
        return result.data;
    } catch (error) {
        throw new Error(`Erro na requisição: `);
    }
    
}



