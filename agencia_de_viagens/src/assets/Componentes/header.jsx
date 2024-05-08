import { Link } from 'react-router-dom'

import Styles from './header.module.css'
import Logo from './imagens/logo.jpeg'
import Lupa from './imagens/lupa.jpeg'

function Header(){
    return(
        <div>
            <header className={Styles.menu}>
                <nav className={Styles.NavLeft}>
                    <img src={Logo} className={Styles.logo} alt="" />
                </nav>

                <nav className={Styles.NavCenter}>
                    <p><Link to='/'> Home </Link> </p>
                    <p><Link to='/Escocia'> Escócia </Link> </p>
                    <p><Link to='/Grand_Canyon'>Grand Canyon</Link>  </p>
                    <p><Link to='/Muralhas_da_China'>Muralhas da China</Link> </p>
                    <p><Link to='/Aruba'>Aruba</Link> </p>
                </nav>

                <nav className={Styles.NavRight}>
                    <input type="text" />
                    <img src={Lupa} className={Styles.busca} alt="" />
                </nav>
            </header>
        </div>
    )
}

export default Header