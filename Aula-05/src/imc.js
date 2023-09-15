function calcularIMC(peso, altura) {

    if(altura === 0 ) {
        // Retorna caso a altura seja 0, não preenchida
        return 'NaN'; 
    }

    const alturaMetros = altura/100;
    return (peso / (alturaMetros * alturaMetros)).toFixed(2);

}

// function calculaTroco(preco, pagamento) {

//     if(pagamento < preco) {
//         return 'Pagamento recusado';
//     }

//     return (pagamento - preco).toFixed(2);
// }

// Módulo responsavél pela exportação da função para coleta do teste
module.exports = {calcularIMC};
