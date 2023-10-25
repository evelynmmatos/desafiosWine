
var ValoresProdutos = [];
var ValorTotalProdutos = 0;


function adicionarProduto(){

    const InputValor = document.getElementById("InputvalorProduto");
    const Lista = document.querySelector('.ListaValores');

    var Valor = InputValor.value;

    if(!Valor || Valor == ''){
        alert("Digite um valor para adicionar");

    }else {
        ValoresProdutos.push(parseInt(Valor));
        
        const novoItem = document.createElement('li');
        novoItem.innerHTML = `Valor do produto adicionado --------------------- R$ ${Valor}`;
        Lista.appendChild(novoItem);
        atualizarTotal();

        document.getElementById("InputvalorProduto").value = ''; 
        

    }
    
}


function atualizarTotal() {
    var total = 0;

    if(ValoresProdutos.length > 1){
        
        let i = 0
        while(i < ValoresProdutos.length){
            total += ValoresProdutos[i];
            i++
        }
    }else{
        total = ValoresProdutos[0];
    }

    const exibirValorTotal = document.getElementById('valorTotal');
    exibirValorTotal.textContent = total.toFixed(2);

    ValorTotalProdutos = total;

}




function calcularTroco() {

    const InputValorRecebido = document.getElementById("InputValorRecebido");
    const exibirValorRecebido = document.getElementById("valorRecebido");
    const exibirValorTroco = document.getElementById("valorTroco");
    
    const valorRecebido = InputValorRecebido.value;


    //Verificando se os campos foram preenchidos

    if(ValorTotalProdutos == 0){
        alert("Coloque os valores dos produtos primeiro!")
        document.getElementById("InputValorRecebido").value = '';
        return 
    }

    if(!valorRecebido || valorRecebido == ''){
        alert("Digite o valor recebido");
    } else {
        exibirValorRecebido.textContent = valorRecebido;


    //Calculando troco

    const valorTroco = valorRecebido - ValorTotalProdutos;
    exibirValorTroco.textContent = valorTroco.toFixed(2);

    }
    
    document.getElementById("InputValorRecebido").value = '';
}




function encerrar() {

    ValoresProdutos = [];
    ValorTotalProdutos = 0;
    
    const exibirValorRecebido = document.getElementById("valorRecebido");
    exibirValorRecebido.textContent = '';

    const exibirValorTroco = document.getElementById("valorTroco");
    exibirValorTroco.textContent = '';

    const exibirValorTotal = document.getElementById('valorTotal');
    exibirValorTotal.textContent = '';

    const Lista = document.querySelector('.ListaValores');
    Lista.innerHTML = '';

    document.getElementById("InputvalorProduto").value = '';
    document.getElementById("InputValorRecebido").value = ''

}

