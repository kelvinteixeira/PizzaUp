import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <div className="topnav">
        <Link className="links" to="/sobre">Sobre</Link>
        <Link className="links" to="/contato">Contato</Link>
        <Link className="links" to="/pedidos">Delivery</Link>
        <Link className="links active" to="/">Home</Link>
      </div>
      <hr />
    </>
  )
}