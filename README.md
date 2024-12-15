Trabalho de Engenharia de Software 2 do UniSenac criado pela professora Aline.

Integrantes: Pedro Brum e Edirlei Tonial.

README - Projeto de Carrinho de Compras com Padrões de Projeto

Este projeto implementa um sistema de carrinho de compras com funcionalidades de gestão de produtos e utilização de diversos padrões de projeto para tornar o código modular, flexível e reutilizável. Abaixo estão descritos os padrões utilizados, onde estão aplicados e suas finalidades.

Padrões de Projeto Implementados

1. Factory Method (Método de Fabricação)

Local: Classes FabricaDeRoupas e FabricaDeAcessorios em fabricaRoupas.js.

Descrição: Esse padrão é usado para criar objetos sem especificar suas classes concretas. As classes derivadas de FabricaDeProdutos implementam o método criarProduto para criar instâncias específicas como Camiseta e Calça.

Utilidade: Facilita a criação de objetos de forma consistente e extensível, permitindo adicionar novos tipos de produtos sem alterar o código existente.

2. Singleton (Instância Única)

Local: produtoRepository em main.js.

Descrição: Embora não explicitamente implementado como um Singleton, o repositório serve como um único ponto de acesso para manipular os dados de produtos.

Utilidade: Garante que haja apenas uma instância central do repositório para gerenciamento de produtos, evitando inconsistências.

3. Composite (Composição)

Local: Classe ColecaoDeProdutos em fabricaRoupas.js.

Descrição: Permite compor objetos Produto em uma estrutura hierárquica. A classe ColecaoDeProdutos permite adicionar vários produtos e tratá-los como uma única entidade.

Utilidade: Ideal para representar coleções de produtos que podem ser manipuladas de forma uniforme.

4. Memento (Momento)

Local: Implementado nas classes CarrinhoMemento e HistoricoCarrinho em memento.js e utilizado na classe Carrinho em carrinho.js.

Descrição: Este padrão permite capturar e armazenar o estado interno de um objeto (o carrinho de compras) sem expor os detalhes da sua implementação. Também possibilita restaurar o estado para um momento anterior.

CarrinhoMemento: Armazena uma cópia do estado do carrinho.

HistoricoCarrinho: Armazena e gerencia os estados salvos (mementos).

Utilidade:

Desfazer Ações (Undo): Permite reverter o carrinho para um estado anterior.

Histórico: Facilita a implementação de uma funcionalidade de linha do tempo para gerenciar alterações.

5. Strategy (Estratégia) (potencial uso)

Local: Pode ser observado indiretamente nos métodos de pesquisa no repositório de produtos em main.js.

Descrição: Os métodos como pesquisarPorCategoria e pesquisarPorNomeLike podem ser vistos como estratégias diferentes para buscar produtos.

Utilidade: Oferece flexibilidade para adicionar novos critérios de pesquisa no repositório de forma modular.

Arquivos do Projeto

carrinho.js: Implementa a lógica do carrinho de compras, incluindo funcionalidades de adicionar produtos, listar, salvar e restaurar estados.

fabricaRoupas.js: Contém as fábricas e produtos do sistema, aplicando o padrão Factory Method.

memento.js: Define as classes para salvar e restaurar o estado do carrinho (Padrão Memento).

main.js: Arquivo principal que executa o sistema e utiliza os componentes implementados.
