import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Pedidos from './pages/Pedidos'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'
import Carrinho from './pages/Carrinho'
import Error from './pages/Error'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/pedidos" exact component={Pedidos}></Route>
        <Route path="/contato" exact component={Contato}></Route>
        <Route path="/sobre" exact component={Sobre}></Route>
        <Route path="/carrinho" exact component={Carrinho}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </BrowserRouter>
  )
}