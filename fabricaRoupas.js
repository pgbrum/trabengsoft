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

class ColecaoDeProdutos extends Produto {
    constructor() {
        super();
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    getNome() {
        return `Coleção de produtos: ${this.produtos.map(prod => prod.getNome()).join(", ")}`;
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

class Ecommerce {
    constructor(fabrica) {
        this.produto = fabrica.criarProduto();
    }

    exibirProduto() {
        console.log(`Produto adicionado ao carrinho: ${this.produto.getNome()}`);
    }
}

const main = () => {
    const fabricaRoupas = new FabricaDeRoupas();
    const ecommerceRoupas = new Ecommerce(fabricaRoupas);
    ecommerceRoupas.exibirProduto();

    const fabricaAcessorios = new FabricaDeAcessorios();
    const ecommerceAcessorios = new Ecommerce(fabricaAcessorios);
    ecommerceAcessorios.exibirProduto();

    const colecao = new ColecaoDeProdutos();
    colecao.adicionarProduto(new Camiseta());
    colecao.adicionarProduto(new Calca());

    console.log(colecao.getNome());
};

main();

module.exports = { FabricaDeRoupas, Camiseta, ColecaoDeProdutos };
