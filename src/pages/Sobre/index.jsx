import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './sobre.css'

export default function Sobre() {
  return (
    <>
      <Header />
      <div className="card-container ">
        <div className="card sobre">
          <h1 className="card-titulo">Pizza Up</h1>
          <h6 className="descricao-sobre">A Pizza up iniciou como pizzaria no ano de 2020 em uma pequena casa localizada na Rua Professor inacio simões em meio a crise da pandiam do corona virus. Desde então está sendo dirigida por pessoas que queriam a melhor pizza de Campina Grande.
            <br /><br />
            Poucas pessoas trabalham conosco e basicamente é um negócio de família. e toda ajuda de amigos fizeram a diferença até aqui, tudo pelo bom trato com as pessoas. Todo o processo até a ida as compras para os insumos, o preparo o manuseio e estudo para se aperfeiçoar continua sendo feito pela família.
            <br /><br />
            Percebemos que para crescermos precisamos nos aperfeiçoar cada dia mais, então estamos sempre a todo vapor, tentando cativar mais e mais clientes. Daí o esforço em crescer e melhorar, num trabalho de desenvolvimento contínuo. O aprendizado é constante, superando problemas e inovando sempre.
            <br /><br />
            Temos orgulho de tercomo clientes as pessoas que melhor representam a sociedade campinense e que muito nos honram com suas presenças. Queremos continuar nesta cidade onde játemos raízes e produzimos frutos, terra esta que nos prestigia e que tanto amamos.

            Família Tocchetto.</h6>
        </div>
      </div>
      <Footer />
    </>
  )
}