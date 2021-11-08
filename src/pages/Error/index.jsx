import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {

  return (
    <>
      <Header />
      <div className="card-container">
        <div className="error-card">
          <h1 className="card-titulo">Desculpe, página não encontrada</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}