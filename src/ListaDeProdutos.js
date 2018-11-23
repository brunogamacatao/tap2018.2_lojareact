import React, { Component } from 'react';

class ListaDeProdutos extends Component {
    constructor(props) {
        super(props);

        this.renderProduto = this.renderProduto.bind(this);
    }

    renderProduto(produto) {
        return (
            <div class="col-lg-4 col-md-4 col-xs-6 card" key={produto.id}>
                <img class="card-img-top" src={produto.fotoPequena}/>
                <h5 class="card-title text-center">{produto.titulo}</h5>
                <div class="card-body">
                    <p>R$ {produto.preco}</p>
                    <button class="btn btn-primary" onClick={() => this.props.onComprar(produto)}>Comprar</button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div class="row text-center text-lg-left">
                {this.props.produtos.map(this.renderProduto)}
            </div>
        );
    }
}

export default ListaDeProdutos;