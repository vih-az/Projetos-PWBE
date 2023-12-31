/********************************************************************************
 * Objetivo: Criar um programa para auxiliar no processo de vendas de uma loja, *
 *            que solicite o código e valor do produto, e apresente o valor     *
 *            atualizado conforme a tabela de condições                         *
 * Data: 25/08/2023                                                             *
 * Autor: Vitoria Azevedo                                                       *
 * Versão 1.0                                                                   *
 ********************************************************************************/

/***************************************************
 *          ---  Tabela de condições  ---          *
 * ----------------------------------------------- *
 * | codigo |          classificação               *
 * |   1    |    À vista, com 8% de desconto       *
 * |   2    |À vista no cartão, com 4% de desconto *
 * |   3    |   Em 2x, preço normal sem juros      *
 * |   4    |   Em 4x, preço acrescido de 8%       *
 ***************************************************/


//Import da minha biblioteca 'calculoVendas'
var calculoVendas = require('./modulo/calculoVendas.js');


//Import da biblioteca readline
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

////
//Entrada de dados - VALOR DO PRODUTO
entradaDados.question('Insira o valor do produto: \n', function(valorProduto){
    let valor = valorProduto.replace(',' , '.');

    ////
    //Entrada de dados - FORMA DE PAGAMENTO
    entradaDados.question('Qual a forma de pagamento?\n[1- À vista, 8% de desconto]  [2- À vista, no cartão, 4% de desconto]  [3- Em 2x, sem juros]  [4- Em 4x, acréscimo de 8%]\n', function(formaPagamento){
        let pagamento = formaPagamento;

        ////
        //Validação para entrada de dados apenas de NÚMEROS, e de números entre 1 E 4
        if(pagamento > 4 || pagamento < 1 || isNaN(pagamento))
            console.log('ERRO: Opção inválida!! Digite apenas as opções acima!');

            ////
            //Validação para entrada de dados VAZIA, MENOR QUE 0 e de OUTROS CARATERES
        else if(valor == '' || isNaN(valor) || valor<0){
            console.log('ERRO: Insira o valor do produto!!');
        }else{

            ////
            //Convertendo para número
            valor = Number(valor)

            ////
            //"Chamando" a função 'porcentagem', do arquivo 'calculoVendas'
            //Nos parênteses, colocar as variáveis que irão para o arquivo da função
            valorAtualizado = calculoVendas.porcentagem(valor, pagamento)
            console.log(`O valor atualizado do produto é: ${valorAtualizado}`);
        }

        
        entradaDados.close();

    })
})