import React, {useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


import pizzas from '../../interfaces/pizzas'
import refrigerantes from '../../interfaces/refrigerantes'
import bordas from '../../interfaces/bordas'

export default function Pedidos() {
  const [tipo, setTipo] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [rua, setrua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [referencia, setReferencia] = useState('')

  const getPizzas = () => {
    return pizzas.map(item => {
      return <option key={pizzas.id}> {pizzas.nome} </option>
    })
  }

  const getRefrigerantes = () => {
    return refrigerantes.map(item => {
      return  <option key={refrigerantes.id}> {refrigerantes.nome} </option>
    })
  }

  const getBordas = () => {
    return bordas.map(item => {
      return  <option key={bordas.id}> {bordas.nome} </option>
    })
  }

  
  return (
    <>
      <Header />
      <div className="card-container">
        <div className="card">
          <h1 className="card-titulo">Pedido</h1>
          <div className="card-content">
            <label htmlFor="tipo">Tipo de pizza</label>
            <select value={tipo} onChange={e => setTipo(e.target.value)} className="campo" name="tipo">
              <option selected defaultValue="" disabled>Selecione</option>
              <option value="Um sabor">1 sabor</option>
              <option value="Dois sabores" >2 sabores</option>
            </select>
          </div>
        </div>

        <div className="card">
          <h1 className="card-titulo">Informações do cliente</h1>
          <div className="card-content">
            <label htmlFor="nome">Nome</label>
            <input value={tipo} onChange={e => setTipo(e.target.value)} className="campo" type="text" id="nome"></input>

            <label htmlFor="telefone">Telefone</label>
            <input value={telefone} onChange={e => setTelefone(e.target.value)} className="campo" type="text" id="telefone"></input>

            <label htmlFor="logradouro">Rua</label>
            <input value={rua} onChange={e => setrua(e.target.value)} className="campo" type="text" id="logradouro"></input>

            <label htmlFor="numero">Numero</label>
            <input value={numero} onChange={e => setNumero(e.target.value)} className="campo" type="text" id="numero"></input>

            <label htmlFor="bairro">Bairro</label>
            <input value={bairro} onChange={e => setBairro(e.target.value)} className="campo"  type="text" id="bairro"></input>

            <label htmlFor="referencia">Ponto de referência</label>
            <textarea value={referencia} onChange={e => setReferencia(e.target.value)} className="campo" type="text" id="referencia" placeholder="ex: próximo ao supermecado..."></textarea>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}