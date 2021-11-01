import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Pedidos from './pages/Pedidos'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/pedidos" exact component={Pedidos}></Route>
        <Route path="/cardapio" exact component={Cardapio}></Route>
        <Route path="/contato" exact component={Contato}></Route>
        <Route path="/sobre" exact component={Sobre}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </BrowserRouter>
  )
}