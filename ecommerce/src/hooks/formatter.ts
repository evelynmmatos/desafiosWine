export const formatarNumero = (numero : number) => {

    
    // Usando toLocaleString para formatar o número com vírgula
    return numero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };