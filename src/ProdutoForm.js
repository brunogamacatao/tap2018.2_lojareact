import React, { Component } from 'react';
import Produto from './model/Produto';

function clone(src) {
    return Object.assign({}, src);
}

class ProdutoForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            produto: this.props.produto || new Produto()
        };

        this.handleChange = this.handleChange.bind(this);
        this.salvar = this.salvar.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value  = target.value;
        const name   = target.name;

        const novoProduto = clone(this.state.produto);
        novoProduto[name] = value;

        this.setState({
            produto: novoProduto
        });
    }

    salvar(event) {
        event.preventDefault();

        this.props.onSalvar(this.state.produto);

        this.setState({
            produto: new Produto()
        });
    }

    render() {
        return (
            <form>
                <div class="form-group">
                    <label>Foto pequena:</label>
                    <input class="form-control" type="text" name="fotoPequena" value={this.state.produto.fotoPequena} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label>Foto grande:</label>
                    <input class="form-control" type="text" name="fotoGrande" value={this.state.produto.fotoGrande} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label>Título:</label>
                    <input class="form-control" type="text" name="titulo" value={this.state.produto.titulo} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label>Preço:</label>
                    <input class="form-control" type="number" step="0.01" name="preco" value={this.state.produto.preco} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label>Descrição:</label>
                    <textarea class="form-control" name="descricao" value={this.state.produto.descricao} onChange={this.handleChange}></textarea>
                </div>
                <button class="btn btn-primary" onClick={this.salvar}>
                    {this.props.labelBotaoSalvar}
                </button>
            </form>
        );
    }
}

export default ProdutoForm;