const { FabricaDeRoupas, Camiseta } = require('./fabricaRoupas.js');

describe('Classe FabricaDeRoupas', () => {
    test('FabricaDeRoupas deve criar uma Camiseta', () => {
        const fabrica = new FabricaDeRoupas();
        const produto = fabrica.criarProduto();
        expect(produto).toBeInstanceOf(Camiseta);
        expect(produto.getNome()).toBe("Camiseta");
    });
});
