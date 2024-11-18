// carrinho.test.js
const { Carrinho } = require('./carrinho');
const { Camiseta } = require('./fabricaRoupas');

describe('Classe Carrinho com Memento', () => {
    let carrinho;

    beforeEach(() => {
        carrinho = new Carrinho();
    });

    test('Salvar e restaurar estado do carrinho', () => {
        const camiseta1 = new Camiseta();
        const camiseta2 = new Camiseta();

        carrinho.adicionarProduto(camiseta1);
        carrinho.salvarEstado();

        carrinho.adicionarProduto(camiseta2);
        carrinho.salvarEstado();

        carrinho.restaurarEstado(0);
        expect(carrinho.produtos).toHaveLength(1);
        expect(carrinho.produtos[0]).toBe(camiseta1);

        carrinho.restaurarEstado(1);
        expect(carrinho.produtos).toHaveLength(2);
        expect(carrinho.produtos[1]).toBe(camiseta2);
    });
});
