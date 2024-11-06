// carrinho.js

class Produto {
    getNome() {
        throw new Error("Método 'getNome' deve ser implementado.");
    }
}

class Camiseta extends Produto {
    getNome() {
        return "Camiseta";
    }
}

class Calca extends Produto {
    getNome() {
        return "Calça";
    }
}

class FabricaDeProdutos {
    criarProduto() {
        throw new Error("Método 'criarProduto' deve ser implementado.");
    }
}

class FabricaDeRoupas extends FabricaDeProdutos {
    criarProduto() {
        return new Camiseta();
    }
}

class FabricaDeAcessorios extends FabricaDeProdutos {
    criarProduto() {
        return new Calca();
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
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
}

// Exportação correta das classes
module.exports = { Carrinho, Camiseta, Calca, FabricaDeRoupas, FabricaDeAcessorios };
