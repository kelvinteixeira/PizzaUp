import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="topnav">
          <Link className="links" to="/carrinho">Carrinho</Link>
          <Link className="links" to="/sobre">Sobre</Link>
          <Link className="links" to="/contato">Contato</Link>
          <Link className="links" to="/pedidos">Pedido</Link>
          <Link className="links" to="/">Cardápio</Link>
        </div>
        <hr />
      </div>
    </>
  )
}