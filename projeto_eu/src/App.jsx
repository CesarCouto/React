
import casalazaro from './assets/logo.ico'
import './App.css'

function App() {

  const mouse = () => {
    document.body.style.backgroundColor = 'red'; // Muda a cor de fundo do body para vermelho
  };

 const mouse_sair = () => {
    document.body.style.backgroundColor = 'blue'; // Muda a cor de fundo do body para vermelho
  };

  return (
    <>
      <div>
        <a href="https://reveste.vercel.app/" target="_blank">
          <img src={casalazaro} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Meu primeiro App solo</h1>
      <div className="card">
        <button onMouseEnter={mouse} onMouseOut={mouse_sair}>X</button>
        <p>
         <a href="https://pt-br.legacy.reactjs.org/">link para documentação do React</a>
        </p>
      </div>
    </>
  )
}




export default App
