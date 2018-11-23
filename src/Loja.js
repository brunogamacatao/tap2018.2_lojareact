import React, { Component } from 'react';
import ProdutoForm from './ProdutoForm';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import BarraDeTitulo from './BarraDeTitulo';

class Loja extends Component {
    constructor(props) {
        super(props);

        this.state = {
            produtos: [
                {
                    id: 1,
                    fotoPequena: 'https://images-na.ssl-images-amazon.com/images/I/41kcZZ7RvNL._AC_US218_.jpg',
                    fotoGrande: 'https://images-na.ssl-images-amazon.com/images/I/71kpbnSOAGL._UX679_.jpg',
                    titulo: 'Boné',
                    descricao: 'Boné Duff Beer oficial',
                    preco: '18.95'
                },
                {
                    id: 2,
                    fotoPequena: 'https://images-na.ssl-images-amazon.com/images/I/513VmRNxKdL._AC_US218_.jpg',
                    fotoGrande: 'https://images-na.ssl-images-amazon.com/images/I/513VmRNxKdL._AC_US218_.jpg',
                    titulo: 'Pokémon',
                    descricao: "Pokémon Let's Go",
                    preco: '59.88'
                },
                {
                    id: 3,
                    fotoPequena: 'https://images-na.ssl-images-amazon.com/images/I/51BPm8X7A1L._AC_US160_.jpg',
                    fotoGrande: 'https://images-na.ssl-images-amazon.com/images/I/51BPm8X7A1L._AC_US160_.jpg',
                    titulo: 'Batata',
                    descricao: 'Batata',
                    preco: '3.09'
                },
                {
                    id: 4,
                    fotoPequena: 'https://images-na.ssl-images-amazon.com/images/I/61jwBPvhwfL._AC_US218_.jpg',
                    fotoGrande: 'https://images-na.ssl-images-amazon.com/images/I/61jwBPvhwfL._AC_US218_.jpg',
                    titulo: 'Cheetos',
                    descricao: 'Cheetos',
                    preco: '5.45'
                },
                {
                    id: 5,
                    fotoPequena: 'https://images-na.ssl-images-amazon.com/images/I/51M33uXZ9TL._AC_US218_.jpg',
                    fotoGrande: 'https://images-na.ssl-images-amazon.com/images/I/51M33uXZ9TL._AC_US218_.jpg',
                    titulo: 'Meia',
                    descricao: 'Meia da Pepsi',
                    preco: '17.01'
                }
            ],
            carrinho: []
        };

        this.onSalvarProduto = this.onSalvarProduto.bind(this);
        this.onComprar = this.onComprar.bind(this);
        this.onRemover = this.onRemover.bind(this);
    }

    onSalvarProduto(produto) {
        const produtos = this.state.produtos.slice();
        produto.id = produto.id || guid();
        produtos.push(produto);
        this.setState({
            produtos: produtos
        });
    }

    onComprar(produto) {
        const carrinho = this.state.carrinho.slice();
        carrinho.push(produto);
        this.setState({
            carrinho: carrinho
        });
    }

    onRemover(produto) {
        const carrinho = this.state.carrinho.slice();
        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].id === produto.id) {
                carrinho.splice(i, 1);
                break;
            }
        }
        this.setState({
            carrinho: carrinho
        });
    }

    render() {
        return (
            <div class="content">
                <BarraDeTitulo/>
                <div class="row">
                    <div class="col-sm">
                        <ListaDeProdutos produtos={this.state.produtos} onComprar={this.onComprar}/>
                    </div>
                    <div class="col-sm">
                        <ProdutoForm labelBotaoSalvar="Cadastrar" onSalvar={this.onSalvarProduto}/>
                    </div>
                    <div class="col-sm">
                        <CarrinhoDeCompras produtos={this.state.carrinho} onRemover={this.onRemover}/>
                    </div>
                </div>
            </div>
        );
    }
}

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export default Loja;