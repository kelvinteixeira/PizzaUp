import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className="container">
        <div className="topnav">
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/cardapio">Cardápio</Link>
          <Link className="links" to="/pedidos">Delivery</Link>
          <Link className="links" to="/contato">Contato</Link>
          <Link className="links" to="/sobre">Sobre</Link>
        </div>
        <hr />
      </div>
    </>
  )
}