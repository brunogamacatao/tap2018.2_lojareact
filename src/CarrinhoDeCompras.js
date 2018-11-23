import React, { Component } from 'react';

class CarrinhoDeCompras extends Component {
    constructor(props) {
        super(props);

        this.renderProduto = this.renderProduto.bind(this);
        this.calculaTotal = this.calculaTotal.bind(this);
    }

    calculaTotal() {
        let total = 0.0;

        this.props.produtos.forEach((p) => {
            total += parseFloat(p.preco);
        });

        return total.toFixed(2);
    }

    renderProduto(produto) {
        return (
            <div key={"carrinho_" + produto.id} class="col-lg-4 col-md-4 col-xs-6 card">
                <img class="card-img-top" src={produto.fotoPequena}/>
                <p class="card-title text-center">{produto.titulo}</p>
                <div class="card-body">
                    <p>R$ {produto.preco}</p>
                    <button class="btn btn-danger" onClick={() => this.props.onRemover(produto)}>Remover</button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div class="row text-center text-lg-left">
                    {this.props.produtos.map(this.renderProduto)}
                </div>
                <h5>Total: R$ {this.calculaTotal()}</h5>
            </div>
        );
    }
}

export default CarrinhoDeCompras;