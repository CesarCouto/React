import './App.css'
import ariel from './assets/imagens/ariel.webp'
import proa from './assets/imagens/proa.jpg'
import sol from './assets/imagens/sol.jpg'
import Titulo from './assets/Componentes/titulo'
import Conteudo from './assets/Componentes/Conteudo'
import Footer from './assets/Componentes/Footer'

function App() {
 
  const nome = "Debs"

  function somatoria(x,y){
    return x + y
   
  }

  return (
    <>   
    <Titulo />
    <Conteudo />
    <Footer />
      <img src={ariel} alt="imagem do proa" className='tamanho' />
      <h1>testando</h1>
      <Footer />
      <img src={proa} alt="alooo"  className='tamanho'/>
      <h2>Ola meu nome é {nome}</h2>
      <p>Exibição da soma de um numero 5 + 10: = {5 + 10}</p>
      <Conteudo />    
      <p>Soma usando função: {somatoria(8,12)} </p>
      <br />
      <img src={sol} alt="imagem de sol"  className='tamanho'/>
      <Footer />
    </>
  )
}

export default App
