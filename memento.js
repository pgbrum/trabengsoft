// memento.js
class CarrinhoMemento {
    constructor(produtos) {
        this.produtos = [...produtos]; // Armazena uma cópia do estado dos produtos
    }
}

class HistoricoCarrinho {
    constructor() {
        this.estados = [];
    }

    adicionarMemento(memento) {
        this.estados.push(memento);
    }

    getMemento(index) {
        return this.estados[index];
    }
}

module.exports = { CarrinhoMemento, HistoricoCarrinho };
