function calculaTroco(preco, pagamento) {

    if(pagamento < preco) {
        return 'Pagamento recusado';
    }

    return (pagamento - preco).toFixed(2);
}

module.exports = {calculaTroco};