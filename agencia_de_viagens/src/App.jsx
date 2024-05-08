import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Escocia from './assets/Componentes/Escocia'
import Grand_Canyon from './assets/Componentes/Grand_Canyon'
import Muralhas_da_China from './assets/Componentes/Muralhas_da_China'
import Header from './assets/Componentes/header'
import Aruba from './assets/Componentes/Aruba'
import Home from './assets/Componentes/Home'
import Footer from './assets/Componentes/Footer'


function App() {

  return (
    <div>
    <Router>
        <Header />
        <Routes>
         <Route path='/' element={ <Home /> } />
         <Route path='/Escocia' element={ <Escocia /> } />
         <Route path='/Grand_Canyon' element={ <Grand_Canyon /> } />
         <Route path='/Muralhas_da_China' element={  <Muralhas_da_China /> } />
         <Route path='/Aruba' element={ <Aruba /> } />
        </Routes>
        <Footer />
     </Router>
    </div>
  )
}

export default App
