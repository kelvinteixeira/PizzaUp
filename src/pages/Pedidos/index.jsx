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
  const [bairro, setBairro] = useState('')
  const [referencia, setReferencia] = useState('')

  const [tipo, setTipo] = useState('')
  const [sabor, setSabor] = useState('')
  const [sabor2, setSabor2] = useState('')
  const [tamanho, setTamanho] = useState('')
  const [borda, setBorda] = useState('')
  const [refrigerante, setRefrigerante] = useState('')
  const [obs, setObs] = useState('')

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
    if (tipo === '1sabor') {
      return <select value={sabor} onChange={e => setSabor(e.target.value)} className="campo" >
        <option selected disabled value="" > Escolha o sabor </option>
        {getPizzas()}
      </select>
    } else if (tipo === '2sabores') {
      return <div>
        < select value={sabor} onChange={e => setSabor(e.target.value)} className="campo" >
          <option selected disabled value="" > Primeiro sabor </option>
          {getPizzas()}
        </select>
        <select value={sabor2} onChange={e => setSabor2(e.target.value)} className="campo" >
          <option selected disable value="" > Segundo sabor </option>
          {getPizzas()}
        </select>
      </div>
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <div className="card-container">
        <form>
          <div className="card">
            <h1 className="card-titulo">Informações do pedido</h1>
            <div className="card-content">
              <label htmlFor="tipo">Tipo de pizza</label>
              <select value={tipo} onChange={e => {
                setTipo(e.target.value)
                setShow(show)
              }} className="campo" name="tipo">
                <option selected disabled value="">Selecione</option>
                <option value="1sabor">1 sabor</option>
                <option value="2sabores" >2 sabores</option>
              </select>

              <div>
                {!show ? tipoPizza() : null}
              </div>


              <label htmlFor="tamanho">Tamanho</label>
              <select value={tamanho} onChange={e => setTamanho(e.target.value)} className="campo">
                <option selected disabled value="">Selecione</option>
                <option value="pequena">Pequena</option>
                <option value="media">Média</option>
                <option value="grande">Grande</option>
              </select>

              <label htmlFor="borda">Tipo de borda</label>
              <select value={borda} onChange={e => setBorda(e.target.value)} className="campo">
                <option selected disabled value="">Selecione</option>
                {getBordas()}
              </select>

              <label htmlFor="refrigerante">Adicionar refrigerante</label>
              <select value={refrigerante} onChange={e => setRefrigerante(e.target.value)} className="campo">
                <option selected disabled value="">Selecione</option>
                {getRefrigerantes()}
              </select>

              <label htmlFor="obs">Observações</label>
              <input value={obs} onChange={e => setObs(e.target.value)} type="text" className="campo" placeholder="ex: não colocar cebolas..."></input>

              <button className="card-button" type="submit" onClick={handleSubmit}>Adicionar ao carrinho</button>

            </div>
          </div>
        </form>

        <form>

          <div className="card">
            <h1 className="card-titulo">Informações do cliente</h1>
            <div className="card-content">
              <label htmlFor="nome">Nome</label>
              <input value={nome} onChange={e => setNome(e.target.value)} className="campo" autoComplete='off' type="text" id="nome"></input>

              <label htmlFor="telefone">Telefone</label>
              <input value={telefone} onChange={e => setTelefone(e.target.value)} className="campo" autoComplete='off' type="text" id="telefone"></input>

              <label htmlFor="logradouro">Rua e número da casa</label>
              <input value={rua} onChange={e => setrua(e.target.value)} className="campo" autoComplete='off' type="text" id="logradouro"></input>

              <label htmlFor="bairro">Bairro</label>
              <input value={bairro} onChange={e => setBairro(e.target.value)} className="campo" autoComplete='off' type="text" id="bairro"></input>

              <label htmlFor="referencia">Ponto de referência</label>
              <input type="text" value={referencia} onChange={e => setReferencia(e.target.value)} autoComplete='off' className="campo" id="referencia" placeholder="ex: próximo ao supermecado..."></input>

              <button className="card-button" type="submit" onClick={handleSubmit}>Adicionar informações</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}