// carrinho.js
const { Camiseta, Calca, FabricaDeRoupas, FabricaDeAcessorios } = require('./fabricaRoupas');
const { CarrinhoMemento, HistoricoCarrinho } = require('./memento');

class Carrinho {
    constructor() {
        this.produtos = [];
        this.historico = new HistoricoCarrinho();
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        console.log(`Produto ${produto.getNome()} adicionado ao carrinho.`);
    }

    listarProdutos() {
        if (this.produtos.length === 0) {
            console.log("O carrinho está vazio.");
            return;
        }
        console.log("Produtos no carrinho:");
        this.produtos.forEach((produto, index) => {
            console.log(`${index + 1}. ${produto.getNome()}`);
        });
    }

    salvarEstado() {
        const memento = new CarrinhoMemento(this.produtos);
        this.historico.adicionarMemento(memento);
        console.log("Estado do carrinho salvo.");
    }

    restaurarEstado(index) {
        const memento = this.historico.getMemento(index);
        if (memento) {
            this.produtos = memento.produtos;
            console.log(`Estado do carrinho restaurado para o índice ${index}.`);
        } else {
            console.log("Nenhum estado encontrado para o índice especificado.");
        }
    }
}

module.exports = { Carrinho, FabricaDeRoupas, FabricaDeAcessorios };
