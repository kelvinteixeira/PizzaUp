import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './contato.css'

import whatappLogo from '../../images/whatsapplogo.png'
import instagramLogo from '../../images/instagramlogo.png'
import phone from '../../images/phone.png'

export default function Contato() {

  const openInstagram = () => {
    window.open('https://www.instagram.com/pizzaupcg/')
  }

  const openWhatsapp = () => {
    window.open('https://web.whatsapp.com/send?phone=5583998506482')
  }

  return (
    <>
      <Header />
      <div className="card-container">
        <section className="card-contato">
          <h1 className="card-titulo">Para mais informações</h1>
          <div className="card-images">
            <img className="images-logo" src={whatappLogo} onClick={openWhatsapp} alt="logo whats app"></img>
            <img className="images-logo" src={instagramLogo} onClick={openInstagram} alt="logo instagram"></img>
          </div>
          <div className="images-phone">
            <img className='images-logo-phone' src={phone} alt="foto do telefone" />
          <div>
            <h1 className="images-numero">83 99999-9999</h1>
          </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}