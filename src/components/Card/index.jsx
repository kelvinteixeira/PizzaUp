import React from 'react'
import './card.css'


import pizzas from '../../pizzas'
import refrigerantes from '../../refrigerantes'
import bordas from '../../bordas'

export default function Card() {

  const getPizzas = () => {
    return pizzas.map(item => {
      return <div>
        <ul className="sabores" key={item.id}> {item.nome} <br /> <div className="descricao"> {item.descricao} <div className="valor"> P - {item.valorP} | M - {item.valorM} | G - {item.valorG} </div></div> </ul>
      </div>
    })
  }

  const getRefrigerantes = () => {
    return refrigerantes.map(item => {
      return <div>
        <ul className="sabores" key={item.id}> {item.nome} <br /> <div className="descricao"> {item.descricao} <div className="valor"> {item.valor} </div></div> </ul>
      </div>
    })
  }

  const getBordas = () => {
    return bordas.map(item => {
      return <div>
        <ul className="sabores" key={item.id}> {item.nome} <br /> <div className="descricao"> {item.descricao} <div className="valor"> {item.valor} </div></div> </ul>
      </div>
    })
  }

  return (
    <>
      <div className="card-container">
        <div className="card">
          <p className="card-titulo" >Pizzas</p>
          {getPizzas()}
        </div>
        <div className="card">
          <p className="card-titulo" >Refrigerantes</p>
          {getRefrigerantes()}
        </div>
        <div className="card">
          <p className="card-titulo" >Bordas rechedas</p>
          {getBordas()}
        </div>
      </div>
    </>
  )
}