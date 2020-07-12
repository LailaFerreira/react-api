import React from 'react'
import ColaboradorService from '../../app/colaboradorService'


const estadoInicial = {
    nome: '',
    idade:'',
    cargo:'',
    email:'',
    codigo:0,
    sucesso: false,
    erros: []
}

class CadastroColaborador extends React.Component {

    state = estadoInicial;

    constructor(){
        super();
        this.service = new ColaboradorService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeCampo = event.target.name

        //colchete p mostrar que o campo é dinamico
        this.setState({ [nomeCampo]: valor })
    }

    onSubmit = (event) => {
        const produto = {
            nome : this.state.nome,
            idade : this.state.idade,
            email : this.state.email,
            codigo : this.state.codigo,
            cargo : this.state.cargo
        }
        try{
            this.service.salvar(produto);
            this.limpar();
            this.setState({sucesso:true})
        }catch(erro){
            const erros = erro.erros
            this.setState({erros : erros})
        }
    }

    limpar = () => {
        this.setState(estadoInicial);
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de contribuidor
                </div>
                <div className="card-body">

                { this.state.sucesso &&
                    <div className="alert alert-dismissible alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Colaborador salvo com</strong> sucesso ;)
                    </div>
                    
                }

                { this.state.erros.length > 0 &&
                    this.state.erros.map( msg => {
                        return(
                            <div class="alert alert-dismissible alert-danger">
                                <button type="button" class="close" data-dismiss="alert">&times;</button>
                                <strong>Ocorreu um erro, tente novamente. </strong> { msg }.
                            </div>       
                        )
                    })
                }

                

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text"
                                 name="nome" 
                                 value={this.state.nome} 
                                 className="form-control"
                                 onChange={this.onChange}/>
                            </div>
                        </div>
                    <div className="col-md-6">
                        <div className="form-group">
                                <label>Idade: </label>
                                <input type="text" 
                                name="idade" 
                                value={this.state.idade} 
                                className="form-control"
                                onChange={this.onChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Cargo - descrição:</label>
                                <textarea name="cargo" 
                                value={this.state.cargo} 
                                className="form-control"
                                onChange={this.onChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>E-mail: *</label>
                                <input name="email" 
                                type="text" 
                                value={this.state.email} 
                                className="form-control"
                                onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Código: *</label>
                                <input name="codigo" 
                                type="text" 
                                value={this.state.codigo}
                                className="form-control"
                                onChange={this.onChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                           <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                           <button onClick={this.limpar} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
                
        )
    }
}

export default CadastroColaborador