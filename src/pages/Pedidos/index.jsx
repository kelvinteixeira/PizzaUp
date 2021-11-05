import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'


import pizzas from '../../interfaces/pizzas'
import refrigerantes from '../../interfaces/refrigerantes'
import bordas from '../../interfaces/bordas'

export default function Pedidos() {
  const [show, setShow] = useState(false)
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [rua, setrua] = useState('')
  const [numero, setNumero] = useState('')
  const [bairro, setBairro] = useState('')
  const [referencia, setReferencia] = useState('')

  const [tipo, setTipo] = useState('')
  const [borda, setBorda] = useState('')

  const getPizzas = () => {
    return pizzas.map(item => {
      return <option key={item.id}> {item.nome} </option>
    })
  }

  const getRefrigerantes = () => {
    return refrigerantes.map(item => {
      return <option key={item.id}> {item.nome} </option>
    })
  }

  const getBordas = () => {
    return bordas.map(item => {
      return <option> {item.nome} </option>
    })
  }

  const tipoPizza = () => {
    if (tipo === 'valor1') {
      return <select className="campo" >
        <option selected disabled defaultValue="" > Escolha o sabor </option>
        {getPizzas()}
      </select>
    } else if (tipo === 'valor2') {
      return <div>
        < select className="campo" >
          <option selected disabled defaultValue="" > Primeiro sabor </option>
          {getPizzas()}
        </select>
        <select className="campo" >
          <option selected disabled defaultValue="" > Segundo sabor </option>
          {getPizzas()}
        </select>
      </div>
    }
  }

  return (
    <>
      <Header />
      <div className="card-container">
        <div className="card">
          <h1 className="card-titulo">Pedido</h1>
          <div className="card-content">
            <label htmlFor="tipo">Tipo de pizza</label>
            <select value={tipo} onChange={e => {
              setTipo(e.target.value)
              setShow(show)
            }} className="campo" name="tipo">
              <option selected disabled value="">Selecione</option>
              <option value="valor1">1 sabor</option>
              <option value="valor2" >2 sabores</option>
            </select>

            <div>
              {!show ? tipoPizza() : null}
            </div>

            <label htmlFor="tamanho">Tamanho</label>
            <select className="campo">
              <option name="borda" selected disabled value="">Selecione</option>
              <option name="borda" value="pequena">Pequena</option>
              <option name="borda" value="media">Média</option>
              <option name="borda" value="grande">Grande</option>
            </select>

            <label htmlFor="borda">Tipo de borda</label>
            <select className="campo">
              <option  name="borda" selected disabled value="">Selecione</option>
              {getBordas()}
            </select>

            <label htmlFor="refrigerante">Adicionar refrigerante</label>
            <select className="campo">
              <option name="borda" selected disabled value="">Selecione</option>
              {getRefrigerantes()}
            </select>

            <label htmlFor="obs">Observações</label>
            <input type="text" className="campo" placeholder="ex: não colocar cebolas..."></input> 

          </div>
        </div>

        <div className="card">
          <h1 className="card-titulo">Informações do cliente</h1>
          <div className="card-content">
            <label htmlFor="nome">Nome</label>
            <input value={nome} onChange={e => setNome(e.target.value)} className="campo" autoComplete='off' type="text" id="nome"></input>

            <label htmlFor="telefone">Telefone</label>
            <input value={telefone} onChange={e => setTelefone(e.target.value)} className="campo" autoComplete='off' type="text" id="telefone"></input>

            <label htmlFor="logradouro">Rua</label>
            <input value={rua} onChange={e => setrua(e.target.value)} className="campo" autoComplete='off' type="text" id="logradouro"></input>

            <label htmlFor="numero">Numero</label>
            <input value={numero} onChange={e => setNumero(e.target.value)} className="campo" autoComplete='off' type="text" id="numero"></input>

            <label htmlFor="bairro">Bairro</label>
            <input value={bairro} onChange={e => setBairro(e.target.value)} className="campo" autoComplete='off' type="text" id="bairro"></input>

            <label htmlFor="referencia">Ponto de referência</label>
            <input type="text" value={referencia} onChange={e => setReferencia(e.target.value)} autoComplete='off' className="campo" id="referencia" placeholder="ex: próximo ao supermecado..."></input>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}