import React, { useState } from 'react'
import './card.css'


import pizzas from '../../pizzas'

export default function Card() {
  const [show, setShow] = useState(false)

  const getPizzas = () => {
    return pizzas.map(item => {
      return <div>
        <ul className="sabores" key={item.id}> {item.nome} <br /> <div className="descricao"> {item.descricao}  {item.valor} <hr /> </div> </ul>
      </div>
    })
  }

  return (
    <>
      <div className="card">
        <p className="card-cardapio" onClick={() => setShow(!show)}>Cardápio</p>
        <div>
           {show ? getPizzas() : null}
        </div>
      </div>
    </>
  )
}