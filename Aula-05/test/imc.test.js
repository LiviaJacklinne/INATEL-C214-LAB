const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

    // it é igual a @test
    it('Calculadora deve rodar tranquilo', () => {
        const peso = 80; // 80kg
        const altura = 180; // 180 cm

        const IMCEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(IMCEsperado);
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 70; // 70kg
        const altura = 0; // 0 cm

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });

});