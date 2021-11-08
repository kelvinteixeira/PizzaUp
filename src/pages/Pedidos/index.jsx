/* eslint-disable no-unused-vars */
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

  const enviar = (e) => {
    e.preventDefault()
    if (tipo === "Um sabor") {
      localStorage.setItem("Pedido", JSON.stringify({
        "tipoDaPizza": tipo,
        "primeiroSabor": sabor,
        "tamanho": tamanho,
        "borda": borda,
        "refrigerante": refrigerante,
        "observações": obs
      }))
    } else {
      localStorage.setItem("Pedido", JSON.stringify({
        "tipoDaPizza": tipo,
        "primeiroSabor": sabor,
        "segundoSabor": sabor2,
        "tamanho": tamanho,
        "borda": borda,
        "refrigerante": refrigerante,
        "observações": obs
      }))
    }
  }

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
      return <option key={item.id} > {item.nome} </option>
    })
  }

 

  const tipoPizza = () => {
    if (tipo === 'Um sabor') {
      return <select defaultValue={'default'} onChange={e => setSabor(e.target.value)} className="campo" >
        <option value="default" > Escolha o sabor </option>
        {getPizzas()}
      </select>
    } if (tipo === 'Dois sabores') {
      return <div>
        < select defaultValue={'default'} onChange={e => setSabor(e.target.value)} className="campo" >
          <option value="default" > Primeiro sabor </option>
          {getPizzas()}
        </select>
        <select defaultValue={'default'} onChange={e => setSabor2(e.target.value)} className="campo" >
          <option value="default" > Segundo sabor </option>
          {getPizzas()}
        </select>
      </div>
    }
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
              <select defaultValue={'default'} onChange={e => {
                setTipo(e.target.value)
                setShow(show)
              }} className="campo" name="tipo">
                <option value="default">Selecione</option>
                <option value="Um sabor">1 sabor</option>
                <option value="Dois sabores" >2 sabores</option>
              </select>

              <div>
                {!show ? tipoPizza() : null}
              </div>


              <label htmlFor="tamanho">Tamanho</label>
              <select defaultValue={'default'} onChange={e => setTamanho(e.target.value)} className="campo">
                <option value="default">Selecione</option>
                <option value="Pequena">Pequena</option>
                <option value="Média">Média</option>
                <option value="Grande">Grande</option>
              </select>

              <label htmlFor="borda">Tipo de borda</label>
              <select defaultValue={'default'} onChange={e => setBorda(e.target.value)} className="campo">
                <option value="default">Selecione</option>
                {getBordas()}
              </select>

              <label htmlFor="refrigerante">Adicionar refrigerante</label>
              <select defaultValue={'default'} onChange={e => setRefrigerante(e.target.value)} className="campo">
                <option value="default">Selecione</option>
                {getRefrigerantes()}
              </select>

              <label htmlFor="obs">Observações</label>
              <input value={obs} onChange={e => setObs(e.target.value)} type="text" className="campo" placeholder="ex: não colocar cebolas..."></input>

              <button className="card-button" type="button" onClick={enviar}>Adicionar ao carrinho</button>

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

              <button className="card-button" type="submit">Adicionar informações</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}