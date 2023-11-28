import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Product } from "../types/types";
import { getAllProducts } from '../services/api';



export const useGetProductId = () => {

    const [product, setProduct] = useState<Product | undefined>();
    const [isLoading, setIsLoading] = useState(true);
    const [productNotFind, setProductNotFind] = useState(false)
    const params = useParams<{ id?: string }>();
    const idProduct = Number(params.id) || 0;

    const getProducts = async () => {
        setIsLoading(true);

        try {
            const result = await getAllProducts();
            const item = result.items.find((item: Product) => item.id === idProduct);

            if (item) {
                setProduct(item);
            } else {
                // Trate o caso em que o produto não foi encontrado
                setProductNotFind(true);
            }
        } catch (error) {
            // Trate o erro da chamada da API
            console.error('Erro ao obter informações do produto', error);
        }finally{
            setIsLoading(false);
        }
    };


    useEffect(() => {
        getProducts();

    }, [idProduct]);

    return {
       product,
       isLoading,
       productNotFind,
       
      };

}


export default useGetProductId;