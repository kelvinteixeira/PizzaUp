import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  const [pagamento, setPagamento] = useState('')
  const [show, setShow] = useState(false)

  const pgtTipo = () => {
    if (pagamento === 'dinheiro') {
      return <div className="coluna">
        <label htmlFor="troco">Valor para troco</label>
        <input className="campo" type="text" placeholder="caso não precise, deixe esse campo em branco"></input>
      </div>
    }
  }

  return (
    <>
      <Header />
      <div className="card-container">
        <div className="card">
          <h1 className="card-titulo">Confirmação do pedido</h1>
          <div>
        
          </div>
          <div className="card-content">
            <label htmlFor="pedido">Confirmar pedido</label>

            <div>
              <label htmlFor="pagamento">Forma de pagamento</label>
              <select value={pagamento} name="pagamento" onChange={e => {
                setPagamento(e.target.value)
                setShow(show)
              }} className="campo" >
                <option selected disabled value="">Selecione</option>
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