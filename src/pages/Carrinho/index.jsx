import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  const [show, setShow] = useState(false)
  const [pagamento, setPagamento] = useState('')

  const pgtTipo = () => {
    if (pagamento === 'dinheiro') {
      return <div className="coluna">
        <label htmlFor="troco">Valor para troco</label>
        <input className="campo" type="text" placeholder="caso não precise, deixe esse campo em branco"></input>
      </div>
    }
  }

  const pedido = () => {
    let pedidoStorage = localStorage.getItem('Pedido')
    const cart = JSON.parse(pedidoStorage)
    console.log(cart)
    if (cart) {
      if (cart.segundoSabor) {
        return <div className="container-pedido">
          <h1 className="pedido-confirmacao">Tipo: {cart.tipoDaPizza}</h1>
          <h1 className="pedido-confirmacao">Sabor: {cart.primeiroSabor}</h1>
          <h1 className="pedido-confirmacao">Sabor: {cart.segundoSabor}</h1>
          <h1 className="pedido-confirmacao">Tamanho: {cart.tamanho}</h1>
          <h1 className="pedido-confirmacao">Borda: {cart.borda}</h1>
          <h1 className="pedido-confirmacao">Refrigerante: {cart.refrigerante}</h1>
          <h1 className="pedido-confirmacao">Observações: {cart.obs}</h1>
        </div>
      } else {
        return <div className="container-pedido">
          <h1 className="pedido-confirmacao">Tipo: {cart.tipoDaPizza}</h1>
          <h1 className="pedido-confirmacao">Sabor: {cart.primeiroSabor}</h1>
          <h1 className="pedido-confirmacao">Tamanho: {cart.tamanho}</h1>
          <h1 className="pedido-confirmacao">Borda: {cart.borda}</h1>
          <h1 className="pedido-confirmacao">Refrigerante: {cart.refrigerante}</h1>
          <h1 className="pedido-confirmacao">Observações: {cart.obs}</h1>
        </div>
      }
    }

  }

  return (
    <>
      <Header />
      <div className="card-container">
        <div className="card">
          <h1 className="card-titulo">Confirmação do pedido</h1>
          <div>
            {pedido()}
          </div>
          <div className="card-content">
            <div>
              <label htmlFor="pagamento">Forma de pagamento</label>
              <select defaultValue={'default'} name="pagamento" onChange={e => {
                setPagamento(e.target.value)
                setShow(show)
              }} className="campo" >
                <option disabled value="default">Selecione</option>
                <option value="dinheiro">Com dinheiro</option>
                <option value="cartao">Com cartão de crédito/debito</option>
              </select>
            </div>

            <div>
              {!show ? pgtTipo() : null}
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}