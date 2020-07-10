import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastroColaborador from './views/colaboradores/cadastro'

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact={true} path="/cadastro-colaboradores" component={CadastroColaborador}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}