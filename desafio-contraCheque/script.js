const feriados = [
  '11-02-2020', // Dia de Finados
  '11-15-2020', // ProClamação da Republica
  
  // Adicione mais feriados aqui...
];



const pontos = [
  '12, Joaquim, 01/11/2020, 10:15, E',
  '24, Joao, 01/11/2020, 10:15, E',
  '48, Maria, 01/11/2020, 10:15, E',
  '24, Joao, 02/11/2020, 11:00, E',
  '48, Maria, 02/11/2020, 10:15, E',
  '12, Joaquim, 03/11/2020, 10:15, E',
  '24, Joao, 03/11/2020, 10:15, E',
  '48, Maria, 03/11/2020, 10:15, E',
  '12, Joaquim, 04/11/2020, 10:15, E',
  '24, Joao, 04/11/2020, 10:15, E',
  '48, Maria, 04/11/2020, 10:15, E',
  '12, Joaquim, 05/11/2020, 10:15, E',
  '24, Joao, 05/11/2020, 10:15, E',
  '48, Maria, 05/11/2020, 10:15, E',
  '12, Joaquim, 06/11/2020, 10:15, E',
  '24, Joao, 06/11/2020, 10:15, E',
  '48, Maria, 06/11/2020, 10:15, E',
  '12, Joaquim, 07/11/2020, 10:15, E',
  '24, Joao, 07/11/2020, 10:00, E',
  '48, Maria, 07/11/2020, 10:15, E',
  '12, Joaquim, 08/11/2020, 10:15, E',
  '24, Joao, 08/11/2020, 12:15, E',
  '48, Maria, 08/11/2020, 10:15, E',
  '12, Joaquim, 09/11/2020, 13:15, E',
  '24, Joao, 09/11/2020, 10:15, E',
  '48, Maria, 09/11/2020, 10:15, E',
  '12, Joaquim, 10/11/2020, 12:15, E',
  '24, Joao, 10/11/2020, 10:15, E',
  '48, Maria, 10/11/2020, 10:15, E',
  '12, Joaquim, 11/11/2020, 14:15, E',
  '24, Joao, 11/11/2020, 10:15, E',
  '48, Maria, 11/11/2020, 10:15, E',
  '12, Joaquim, 12/11/2020, 12:15, E',
  '24, Joao, 12/11/2020, 10:15, E',
  '48, Maria, 12/11/2020, 12:15, E',
  '12, Joaquim, 13/11/2020, 10:15, E',
  '24, Joao, 13/11/2020, 10:15, E',
  '48, Maria, 13/11/2020, 13:15, E',
  '12, Joaquim, 14/11/2020, 10:15, E',
  '24, Joao, 14/11/2020, 10:15, E',
  '48, Maria, 14/11/2020, 10:15, E',
  '12, Joaquim, 15/11/2020, 10:15, E',
  '24, Joao, 15/11/2020, 10:15, E',
  '48, Maria, 15/11/2020, 13:15, E',
  '12, Joaquim, 16/11/2020, 10:15, E',
  '24, Joao, 16/11/2020, 15:15, E',
  '48, Maria, 16/11/2020, 10:15, E',
  '12, Joaquim, 17/11/2020, 10:15, E',
  '24, Joao, 17/11/2020, 13:15, E',
  '48, Maria, 17/11/2020, 10:15, E',
  '12, Joaquim, 18/11/2020, 16:15, E',
  '24, Joao, 18/11/2020, 10:15, E',
  '48, Maria, 18/11/2020, 13:15, E',
  '12, Joaquim, 19/11/2020, 10:15, E',
  '24, Joao, 19/11/2020, 14:15, E',
  '48, Maria, 19/11/2020, 10:15, E',
  '12, Joaquim, 20/11/2020, 10:15, E',
  '24, Joao, 20/11/2020, 10:15, E',
  '48, Maria, 20/11/2020, 14:15, E',
  '12, Joaquim, 21/11/2020, 10:15, E',
  '24, Joao, 21/11/2020, 10:15, E',
  '48, Maria, 21/11/2020, 10:15, E',
  '12, Joaquim, 22/11/2020, 10:15, E',
  '24, Joao, 22/11/2020, 15:15, E',
  '48, Maria, 22/11/2020, 10:15, E',
  '12, Joaquim, 23/11/2020, 10:15, E',
  '24, Joao, 23/11/2020, 15:15, E',
  '48, Maria, 23/11/2020, 10:15, E',
  '12, Joaquim, 24/11/2020, 10:15, E',
  '24, Joao, 24/11/2020, 14:15, E',
  '48, Maria, 24/11/2020, 10:15, E',
  '12, Joaquim, 25/11/2020, 10:15, E',
  '24, Joao, 25/11/2020, 10:15, E',
  '48, Maria, 25/11/2020, 15:15, E',
  '12, Joaquim, 26/11/2020, 10:15, E',
  '24, Joao, 26/11/2020, 10:15, E',
  '48, Maria, 26/11/2020, 10:15, E',
  '12, Joaquim, 27/11/2020, 10:15, E',
  '24, Joao, 27/11/2020, 10:15, E',
  '48, Maria, 27/11/2020, 12:15, E',
  '12, Joaquim, 28/11/2020, 10:15, E',
  '24, Joao, 28/11/2020, 14:15, E',
  '48, Maria, 28/11/2020, 10:15, E',
  '12, Joaquim, 29/11/2020, 10:15, E',
  '24, Joao, 29/11/2020, 10:15, E',
  '48, Maria, 29/11/2020, 14:15, E',
  '24, Joao, 30/11/2020, 15:15, E',
  '48, Maria, 30/11/2020, 10:15, E',
  '12, Joaquim, 01/11/2020, 17:15, S',
  '24, Joao, 01/11/2020, 17:15, S',
  '48, Maria, 01/11/2020, 17:15, S',
  '24, Joao, 02/11/2020, 17:00, S',
  '48, Maria, 02/11/2020, 17:15, S',
  '12, Joaquim, 03/11/2020, 18:15, S',
  '24, Joao, 03/11/2020, 17:15, S',
  '48, Maria, 03/11/2020, 17:15, S',
  '12, Joaquim, 04/11/2020, 17:15, S',
  '24, Joao, 04/11/2020, 17:15, S',
  '48, Maria, 04/11/2020, 17:15, S',
  '12, Joaquim, 05/11/2020, 17:15, S',
  '24, Joao, 05/11/2020, 18:15, S',
  '48, Maria, 05/11/2020, 17:15, S',
  '12, Joaquim, 06/11/2020, 18:15, S',
  '24, Joao, 06/11/2020, 17:15, S',
  '48, Maria, 06/11/2020, 17:15, S',
  '12, Joaquim, 07/11/2020, 17:15, S',
  '24, Joao, 07/11/2020, 17:00, S',
  '48, Maria, 07/11/2020, 17:15, S',
  '12, Joaquim, 08/11/2020, 17:15, S',
  '24, Joao, 08/11/2020, 16:15, S',
  '48, Maria, 08/11/2020, 17:15, S',
  '12, Joaquim, 09/11/2020, 17:15, S',
  '24, Joao, 09/11/2020, 17:15, S',
  '48, Maria, 09/11/2020, 17:15, S',
  '12, Joaquim, 10/11/2020, 17:15, S',
  '24, Joao, 10/11/2020, 18:15, S',
  '48, Maria, 10/11/2020, 17:15, S',
  '12, Joaquim, 11/11/2020, 17:15, S',
  '24, Joao, 11/11/2020, 17:15, S',
  '48, Maria, 11/11/2020, 17:15, S',
  '12, Joaquim, 12/11/2020, 17:15, S',
  '24, Joao, 12/11/2020, 17:15, S',
  '48, Maria, 12/11/2020, 17:15, S',
  '12, Joaquim, 13/11/2020, 17:15, S',
  '24, Joao, 13/11/2020, 17:15, S',
  '48, Maria, 13/11/2020, 17:15, S',
  '12, Joaquim, 14/11/2020, 17:15, S',
  '24, Joao, 14/11/2020, 17:15, S',
  '48, Maria, 14/11/2020, 18:15, S',
  '12, Joaquim, 15/11/2020, 17:15, S',
  '24, Joao, 15/11/2020, 17:15, S',
  '48, Maria, 15/11/2020, 17:15, S',
  '12, Joaquim, 16/11/2020, 17:15, S',
  '24, Joao, 16/11/2020, 17:15, S',
  '48, Maria, 16/11/2020, 17:15, S',
  '12, Joaquim, 17/11/2020, 17:15, S',
  '24, Joao, 17/11/2020, 17:15, S',
  '48, Maria, 17/11/2020, 17:15, S',
  '12, Joaquim, 18/11/2020, 17:15, S',
  '24, Joao, 18/11/2020, 17:15, S',
  '48, Maria, 18/11/2020, 16:15, S',
  '12, Joaquim, 19/11/2020, 17:15, S',
  '24, Joao, 19/11/2020, 17:15, S',
  '48, Maria, 19/11/2020, 17:15, S',
  '12, Joaquim, 20/11/2020, 17:15, S',
  '24, Joao, 20/11/2020, 17:15, S',
  '48, Maria, 20/11/2020, 16:15, S',
  '12, Joaquim, 21/11/2020, 17:15, S',
  '24, Joao, 21/11/2020, 17:15, S',
  '48, Maria, 21/11/2020, 17:15, S',
  '12, Joaquim, 22/11/2020, 17:15, S',
  '24, Joao, 22/11/2020, 16:15, S',
  '48, Maria, 22/11/2020, 17:15, S',
  '12, Joaquim, 23/11/2020, 17:15, S',
  '24, Joao, 23/11/2020, 17:15, S',
  '48, Maria, 23/11/2020, 17:15, S',
  '12, Joaquim, 24/11/2020, 17:15, S',
  '24, Joao, 24/11/2020, 17:15, S',
  '48, Maria, 24/11/2020, 17:15, S',
  '12, Joaquim, 25/11/2020, 17:15, S',
  '24, Joao, 25/11/2020, 17:15, S',
  '48, Maria, 25/11/2020, 18:15, S',
  '12, Joaquim, 26/11/2020, 17:15, S',
  '24, Joao, 26/11/2020, 17:15, S',
  '48, Maria, 26/11/2020, 18:25, S',
  '12, Joaquim, 27/11/2020, 17:15, S',
  '24, Joao, 27/11/2020, 17:15, S',
  '48, Maria, 27/11/2020, 17:15, S',
  '12, Joaquim, 28/11/2020, 17:15, S',
  '24, Joao, 28/11/2020, 17:15, S',
  '48, Maria, 28/11/2020, 17:15, S',
  '12, Joaquim, 29/11/2020, 18:15, S',
  '24, Joao, 29/11/2020, 17:15, S',
  '48, Maria, 29/11/2020, 17:15, S',
  '24, Joao, 30/11/2020, 18:15, S',
  '48, Maria, 30/11/2020, 17:15, S'
]
const registros = [];

function adicionarDiasDoMes(dataInicial, quantidadeDias) {
  const datas = [];
  for (let i = 0; i < quantidadeDias; i++) {
    const data = new Date(dataInicial);
    data.setDate(data.getDate() + i);
    datas.push(data);
  }
  return datas;
}

pontos.forEach(ponto => {
  const [matricula, nome, data, hora, tipo] = ponto.split(', ');

  if (!registros[matricula]) {
    registros[matricula] = {
      matricula,
      nome,
      datas: adicionarDiasDoMes(new Date('11-01-2020'), 30).map(date => ({
        data: date.toLocaleDateString(),
        entrada: '',
        saida: '',
        dia_semana: adcionarDiaSemana(converteData(date.toLocaleDateString()))
      })) 
    };
  }

  const registro = registros[matricula];
  const dataHora = `${data} ${hora}`;
  const registroData = registro.datas.find(item => item.data === data);

  if (tipo === 'E') {
    if (!registroData) {
      registro.datas.push({ data, entrada: dataHora, saida: null, dia_semana: adcionarDiaSemana(converteData(data)) });
    } else {
      registroData.entrada = dataHora;
    }
  } else if (tipo === 'S') {
    if (registroData) {
      registroData.saida = dataHora;
    }
  }
});


const funcionarios = [];

function adcionarFuncionario(){
  for (const matricula in registros) {
    const registro = registros[matricula];
    const funcionario = {
      matricula: registro.matricula,
      nome: registro.nome,
      total_Dias_Uteis_Trabalhados: totalDiasTrabalhados(registro.matricula, 'Util'), 
      total_Fds_Trabalhados: totalDiasTrabalhados(registro.matricula, 'Sabado') + totalDiasTrabalhados(registro.matricula, 'Domingo') , 
      total_Feriado_Trabalhados: totalDiasTrabalhados(registro.matricula, 'Feriado'), 
      total_Horas_Trabalhadas: totalHorasTrabalhadas(registro.matricula),
      total_Horas_Descontadas: calcularHorasDescontadas(registro.datas),
      total_Reais_Horas_Trabalhadas: calcularSalarioBruto(registro.matricula, registro.datas),
      salario_Bruto: calcularSalarioBruto(10, 2020),
      desconto_Faltas_Atraso: calcularFaltasAtrasos(registro.matricula),
      desconto_INSS: calcularDescontoInss(),
      desconto_Total: calcularTotalDescontos(registro.matricula),
      salario_Liquido: calcularSalarioLiquido(registro.matricula)
    }

    funcionarios.push(funcionario);
  }
  
}

// Converter data, verificar e adicionar dia da semana //



function converteData(dataString) {
  
  const partes = dataString.split('/');
  if (partes.length === 3) {
    const [dia, mes, ano] = partes;
    //Mes-dia-ano
    const dataFormatada = `${mes.trim()}-${dia.trim()}-${ano.trim()}`;

    return dataFormatada;
  }
  
  return null; // Retorna null se a data não puder ser convertida
}

function adcionarDiaSemana(data) {

  
  if(ehFeriado(data) === true){
    return 'Feriado'

  }else {
    const minhaData = new Date(data);
    const diaDaSemana = minhaData.getDay();

    switch (diaDaSemana){

      case 0: 
        return 'Domingo'
      break;

      case 6: 
        return 'Sabado'
      break;

      default:
        return 'Util'
      break;
    }
  } 
}


function ehFeriado(minhaData) {

  for(i = 0; i < feriados.length; i++){
    if(minhaData == feriados[i]){
      return true
    }  
  }

  return false;
}


// Total de dias trabalhados

function totalDiasTrabalhados(matricula, dia_semana){
  var quantidadeDias = 0;
  registros.forEach((registro) => {
    if(registro.matricula === matricula){
      quantidadeDias = registro.datas.reduce((count, data) => {
        if(data.dia_semana === dia_semana && data.entrada){
          count ++;
        }
        return count
      }, 0)
    }
  })

  return quantidadeDias;
}


//Função para contar Fds (1 final de semana equivale a 2 dias)
function totalFdsTrabalhados(matricula){
  var totalFds = 0;

  registros.forEach((registro) => {
    if(registro.matricula === matricula){
    
      for(i = 0; i < 30; i++){
        if(registro.datas[i].entrada){
          var Dia = new Date(converteData(registro.datas[i].data));
          const DiaSemana = Dia.getDay();
          if(DiaSemana == 0 || DiaSemana == 6){
            totalFds += 1
          }
        }
      } 
      
    }
  })
  
  return Math.round(totalFds / 2)
}

// Total de Horas trabalhadas

function calcularMilisegundos(datas){

  var valorMilisegundos = 0;

  for(i = 0; i< datas.length; i++){

    if(datas[i].entrada == ''){
      valorMilisegundos += 0; 
    }else{

    
      const partesDia = datas[i].data.split('/');
      const [dia, mes, ano] = partesDia;
      const dataFormatada = `${ano.trim()}-${mes.trim()}-${dia.trim()}`;


      const partesHoraEntrada = datas[i].entrada.split(' ');
      const entrada = partesHoraEntrada[1];

      const partesHoraSaida = datas[i].saida.split(' ');
      const saida = partesHoraSaida[1];
      
      const entradaDate = new Date(`${dataFormatada}T${entrada}`);
      const saidaDate = new Date(`${dataFormatada}T${saida}`);

      const diferencaEmMilissegundos = (saidaDate - entradaDate);
      
      
      valorMilisegundos += diferencaEmMilissegundos;
    }
  }

  return valorMilisegundos;
  
}

function calcularHorasMinutos(milisegundos){
  const milisegundosPorHora = 3600000;
  const milisegundosPorMinuto = 60000;

  // Calcula a quantidade de horas
  const horas = Math.floor(milisegundos / milisegundosPorHora);

  // Calcula o restante após a divisão pelas horas
  const restante = milisegundos % milisegundosPorHora;

  // Calcula a quantidade de minutos
  const minutos = Math.floor(restante / milisegundosPorMinuto);

  return `${horas} horas e ${minutos} minutos`;
}


function totalHorasTrabalhadas(matricula){
  var horasTrabalhadas = '';
  var QtdMilisegundos = 0;
  registros.forEach((registro) => {
    if(registro.matricula === matricula){
      
      QtdMilisegundos = calcularMilisegundos(registro.datas)
      
    }
  })

  //Convertendo para Horas
  horasTrabalhadas = calcularHorasMinutos(QtdMilisegundos)

  return horasTrabalhadas;

}



// Total de horas Descontadas

function calcularHorasDescontadas(datas) {
  var milisegundosDescontados = 0;
  var horaDescontada = 0;

  for(i = 0; i < datas.length; i++){

    if(datas[i].entrada == ''){
      if(i != '')
      milisegundosDia = 7 * 3600000;
      milisegundosDescontados += milisegundosDia;

    }else {

      const partesDia = datas[i].data.split('/');
      const [dia, mes, ano] = partesDia;
      const dataFormatada = `${ano.trim()}-${mes.trim()}-${dia.trim()}`;


      const partesHoraEntrada = datas[i].entrada.split(' ');
      const entrada = partesHoraEntrada[1];

      const partesHoraSaida = datas[i].saida.split(' ');
      const saida = partesHoraSaida[1];
      
      const horaEntrada = new Date(`${dataFormatada}T${entrada}`);
      const horaSaida = new Date(`${dataFormatada}T${saida}`);


      const limiteEntrada = new Date(horaEntrada);
      limiteEntrada.setHours(10, 15, 0, 0); // Limite de entrada: 10:15

      const limiteSaida = new Date(horaSaida);
      limiteSaida.setHours(16, 45, 0, 0); // Limite de saída: 16:45


      if(horaEntrada <= limiteEntrada && horaSaida >= limiteSaida){
        milisegundosDescontados += 0;
      } else{

        if(horaEntrada > limiteEntrada){
          limiteEntrada.setHours(10, 0, 0, 0);
          milisegundosDescontados += horaEntrada - limiteEntrada;
          
        }

        if(horaSaida < limiteSaida){
          limiteSaida.setHours(17, 0, 0, 0)
          milisegundosDescontados += horaSaida - limiteSaida;
        
        }
        
      } 
    }
      
  }

  horaDescontada =  calcularHorasMinutos(milisegundosDescontados);

  
 
  
  return horaDescontada;
}




// Calcular Desconto de Faltas e Atrasos

function calcularFaltasAtrasos(matricula) {
  var DatasUtil = [];
  var DatasFeriado = [];
  var DatasDomingo = [];
  var DatasSabado = [];
  

  registros.forEach((funcionario) => {
    if(funcionario.matricula === matricula){

       DatasUtil = funcionario.datas.filter(data => data.dia_semana === 'Util');
       DatasFeriado = funcionario.datas.filter(data => data.dia_semana === 'Feriado');
       DatasDomingo = funcionario.datas.filter(data => data.dia_semana === 'Domingo');
       DatasSabado = funcionario.datas.filter(data => data.dia_semana === 'Sabado');
      
      
    }

  })

  var valorTotalDescontoUtil = calcularValorDescontado(DatasUtil, 'Util');
  var valorTotalDescontoFeriado = calcularValorDescontado(DatasFeriado, 'Feriado');
  var valorTotalDescontoSabado = calcularValorDescontado(DatasSabado, 'Sabado');
  var valorTotalDescontoDomingo = calcularValorDescontado(DatasDomingo, 'Domingo');

  var valorTotalDesconto = 
    parseFloat(valorTotalDescontoUtil) + 
    parseFloat(valorTotalDescontoFeriado) + 
    parseFloat(valorTotalDescontoSabado) + 
    parseFloat(valorTotalDescontoDomingo);

  
  
  return valorTotalDesconto.toFixed(2)
  
}

function calcularValorDescontado(datas, dia_semana){

  var stringHorasMinutos = calcularHorasDescontadas(datas);
  const [hora, , , minuto] = stringHorasMinutos.split(' ');
  

  const horasDescontadas = parseInt(hora) + parseInt(minuto) / 60;
 
  var valorDia = 0 ;

  switch(dia_semana){
    case 'Util':
      valorDia = 30.45
    break;

    case 'Sabado': 
    valorDia = 45.87
    break;

    case 'Domingo': 
    valorDia = 90.73 
    break;

    case 'Feriado': 
    valorDia = 120.99;
    break;

  }

  const valorTotalDescontado = (horasDescontadas * (valorDia / 7));
  return valorTotalDescontado;

}


// Calcular Descontos // 

function calcularDescontoInss(){
  const salarioBruto = calcularSalarioBruto(10, 2020);

  
  return (salarioBruto * 0.08).toFixed(2);
  
}


function calcularTotalDescontos(matricula){
  var valor_INSS = calcularDescontoInss();
  var valor_DescontoFaltasAtrasos = calcularFaltasAtrasos(matricula);
  
  valorTotalDesconto = parseFloat(valor_INSS) + parseFloat(valor_DescontoFaltasAtrasos);
  return valorTotalDesconto.toFixed(2)

}



// Calcular Salario 

function calcularSalarioBruto(mes, ano){

  const DiaUtil = 30.45;
  const Sabado = 45.87;
  const Domingo = 90.73;
  const Feriado = 120.99;

  const diasNoMes = new Date(ano, mes + 1, 0).getDate(); // Número de dias no mês
  let somaTotal = 0;

  
  for (let dia = 1; dia <= diasNoMes; dia++) {
    const data = new Date(ano, mes, dia);

    const diaFormat = data.getDate().toString().padStart(2, '0');
    const mesFormat = (data.getMonth() + 1).toString().padStart(2, '0');
    const anoFormat = data.getFullYear();

    const dataFormat = `${mesFormat}-${diaFormat}-${anoFormat}`

    let valorDia = 0;
  
    if(ehFeriado(dataFormat) === true){
        valorDia = Feriado;
    }else {
      const diaSemana = data.getDay(); // 0 para domingo, 1 para segunda, ... , 6 para sábado
    
      switch (diaSemana) {
        case 0: // Domingo
          valorDia = Domingo;
        break;

        case 6: // Sábado
          valorDia = Sabado;
        break;

        default: // Dias úteis
          valorDia = DiaUtil;
        break;
      }

    }

    somaTotal += valorDia;
  }

  return somaTotal.toFixed(2);
}

function calcularSalarioLiquido(matricula) {

  var salarioBruto = calcularSalarioBruto(10, 2020);
  var valorDescontos =calcularTotalDescontos(matricula);
  
   var salarioLiquido = salarioBruto - valorDescontos

  return salarioLiquido.toFixed(2);
}



function mostrarTela(){

  for(i = 0; i < funcionarios.length; i++){


  const ul = document.getElementById('Lista_ContraCheque');
  const li = document.createElement('li');

  li.innerHTML = `
    <div class="contraChequeItem">
      <div class="infos">
        <span>Matricula: ${funcionarios[i].matricula}</span>
        <span>Nome Funcionario: ${funcionarios[i].nome}</span>
      </div>

      <div class="infos">
        <span>Total de dias úteis trabalhados: </span>
        <span>${funcionarios[i].total_Dias_Uteis_Trabalhados} dias</span>
      </div>

      <div class="infos">
        <span>Total de finais de semana trabalhados:</span>
        <span>${funcionarios[i].total_Fds_Trabalhados} dias</span>
      </div>

      <div class="infos">
        <span>Total de feriados trabalhados: </span>
        <span>${funcionarios[i].total_Feriado_Trabalhados} dias</span>
      </div>

      <div class="infos">
        <span>Total de horas trabalhadas: </span>
        <span>${funcionarios[i].total_Horas_Trabalhadas}</span>
      </div>

      <div class="infos">
        <span>Total de horas descontadas: </span>
        <span>${funcionarios[i].total_Horas_Descontadas}</span>
      </div>

      <div class="infos">
        <span>Salário bruto (total a pagar)</span>
        <span>R$ ${funcionarios[i].salario_Bruto} </span>
      </div>

      <div class="infos">
        <span>Descontos (faltas e atrasos)</span>
        <span>R$ ${funcionarios[i].desconto_Faltas_Atraso}</span>
      </div>

      <div class="infos">
        <span>Desconto INSS</span>
        <span>R$ ${funcionarios[i].desconto_INSS} </span>
      </div>

      <div class="infos">
        <span>Total de Descontos: </span>
        <span>R$ ${funcionarios[i].desconto_Total} </span>
      </div>

      <div class="infos">
        <span>Salário liquido</span>
        <span>R$ ${funcionarios[i].salario_Liquido} </span>
      </div>
    </div>
  `

  ul.appendChild(li);
  }
}

adcionarFuncionario();
mostrarTela();



