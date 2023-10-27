
const InputAdicionarItem = document.getElementById('input-adicionar');
InputAdicionarItem.addEventListener('keyup', handleKeyUp);

var listaItens = [];


function handleKeyUp(e) {

    if(e.key == 'Enter'){

      if(!InputAdicionarItem.value || InputAdicionarItem.value == ''){
        alert('Digite algo...')
      }else {

        adicionarItens(InputAdicionarItem.value);
        InputAdicionarItem.value = '';

      }   
    }

}

function adicionarItens(itemTask){

    listaItens.push(itemTask)
      atualizarLista()
}



function atualizarLista(){
    localStorage.setItem('tasks', JSON.stringify(listaItens));
    carregarItens();
}


function carregarItens() {
    const ul = document.getElementById('listaItens');
    ul.innerHTML = "";

    listaItens = JSON.parse(localStorage.getItem('tasks')) ?? []
    
    listaItens.map((item, index) => {

     mostrarNaTela(item, index)
  
    })
}


function mostrarNaTela(text,index) {
    const ul = document.getElementById('listaItens');
    const li = document.createElement('li')
    
    li.innerHTML = `
      <div class="divLi">
        <input type="checkbox" />
        <span id="textTask">${text}</span>
        <button id="buttonEdit" onclick="editItem(${index})">Editar</button>
        <button id="buttonRemove" onclick="removeItem(${index})">Remover</button>
      </div>
    `

    ul.appendChild(li)

}



function editItem(index) {
  let novaTask = prompt('Digite a nova Task:');

  if(!novaTask || novaTask == ''){
    return
  }

  listaItens[index] = novaTask ;
  atualizarLista();  

}

function removeItem(index) {
    listaItens.splice(index, 1);
    atualizarLista();
}


carregarItens();
