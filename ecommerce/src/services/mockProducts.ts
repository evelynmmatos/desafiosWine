
import Mockproducts from "./Products"

export const getAllProductsFile = () => {
   
    return Promise.resolve(Mockproducts)
}



export const getProductsFile = (limit: number, pageActive: number) => {
    const grupos = [];

    let i = 0;
    let grupo = []
    while(i < Mockproducts.length){
        grupo.push(Mockproducts[i])
        
        if(grupo.length === limit){
            grupos.push(grupo)
            grupo = []
        }
        
        i++
    }

    grupos.push(grupo)

    console.log(grupos)
    console.log(grupos[pageActive-1])
    console.log(pageActive - 1)

    return grupos[pageActive-1]
}





  
  
  