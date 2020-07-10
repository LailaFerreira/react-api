import React from 'react'

function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Bem vindo</h1>
            <p className="lead">Controle de colaboradores</p>
            <hr className="my-4"/>
            <p>Utilize o sistema para gerenciar os funcionários.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
            </p>
        </div>
    )

}

export default Home