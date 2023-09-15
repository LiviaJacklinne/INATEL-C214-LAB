const { expect } = require('chai');
const { calculaTroco } = require('../src/troco');

describe('Calculadora de Troco', () => {

    // it é igual a @test
    it('Saldo disponivel, da para pagar', () => {
        const preco = 20; 
        const pagamento = 50; 

        const TrocoEsperado = (pagamento - preco).toFixed(2);
        const TrocoCalculado = calculaTroco(preco, pagamento);

        expect(TrocoCalculado).to.equal(TrocoEsperado);
    });

    it('Saldo negativo, não da para pagar', () => {
        const preco = 70; // 70kg
        const pagamento = 50; // 0 cm

        const TesteCalculado = calculaTroco(preco, pagamento);

        expect(TesteCalculado).to.equal('Pagamento recusado');
    });

});