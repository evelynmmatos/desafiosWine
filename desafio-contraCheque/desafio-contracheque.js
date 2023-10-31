/*
  ### CONTEXTO
  Imagine que você trabalha em uma empresa de tecnologia na qual o registro de frequência dos funcionários
  é realizado através de um relógio de ponto provido por uma empresa especializada, contratada para este fim. 
  Este equipamento envia as informações registradas para um sistema externo, o qual faz o processamento dos 
  dados e envia o contracheque individual para o e-mail de cada colaborador, até o quinto dia útil de cada mês. 

  Porém, na data limite para envio do e-mail ocorreu um bug no sistema externo e a empresa contratada informou 
  que a previsão de normalização do sistema é de três dias. Tendo em vista a necessidade de cumprimento do 
  prazo de envio, elabore um contracheque com a base de dados do ponto eletrônico, seguindo as normas e valores 
  estabelecidos abaixo.
*/

/*
  ### MODELO DO CONTRACHEQUE
  1 - Nome e matrícula dos funcionários 
  2 - Total de dias úteis trabalhados 
  3 - Total de finais de semana trabalhados 
  4 - Total de feriados trabalhados 
  5 - Total de horas trabalhadas 
  6 - Total de horas descontadas
  7 - Salário bruto (total a pagar)
  8 - Descontos (faltas e atrasos)
  9 - Desconto INSS
  10 - Desconto total (item 8 + item 9)
  11 - Salário líquido (valor a ser depositado)
*/


/*
  ### INFORMAÇÕES BASE
  – O dia tem 7h
  - Não conta com horário de almoço
  - O horário de entrada é 10h00
  - O horário de saída é 17h00
  - São permitidos 15min de tolerância
*/

/*
  ### VALORES PADRÃO
  Dia útil: R$ 30,45  
  Sábado: R$ 45,87 
  Domingo: R$ 90,73 
  Feriado: R$ 120,99
  INSS: 8%

*/

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

