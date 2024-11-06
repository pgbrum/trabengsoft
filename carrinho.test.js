// carrinho.test.js

const { Carrinho, Camiseta, Calca, FabricaDeRoupas } = require('./carrinho'); // Adicione FabricaDeRoupas

describe('Classe Carrinho', () => {
    let carrinho;

    beforeEach(() => {
        carrinho = new Carrinho();
    });

    test('Adicionar produto ao carrinho', () => {
        const camiseta = new Camiseta();
        carrinho.adicionarProduto(camiseta);
        expect(carrinho.produtos).toContain(camiseta);
    });

    test('Listar produtos no carrinho', () => {
        const camiseta = new Camiseta();
        carrinho.adicionarProduto(camiseta);
        console.log = jest.fn(); // Espia o console.log

        carrinho.listarProdutos();
        expect(console.log).toHaveBeenCalledWith("Produtos no carrinho:");
        expect(console.log).toHaveBeenCalledWith("1. Camiseta");
    });

    test('Exibir mensagem quando o carrinho estiver vazio', () => {
        console.log = jest.fn(); // Espia o console.log

        carrinho.listarProdutos();
        expect(console.log).toHaveBeenCalledWith("O carrinho está vazio.");
    });
});

describe('Classe FabricaDeRoupas', () => {
    test('Criar um produto do tipo Camiseta', () => {
        const fabricaRoupas = new FabricaDeRoupas(); // Agora deve estar definido
        const produto = fabricaRoupas.criarProduto();
        expect(produto).toBeInstanceOf(Camiseta);
        expect(produto.getNome()).toBe("Camiseta");
    });
});
