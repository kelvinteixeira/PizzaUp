import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Pedidos from './pages/Pedidos'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/pedidos" exact component={Pedidos}></Route>
        <Route path="*" component={Error}></Route>
      </Switch>
    </BrowserRouter>
  )
}