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
                    <p>Home</p>
                    <p>Escócia</p>
                    <p>Grand Canyon</p>
                    <p>Muralhas da China</p>
                    <p>Aruba</p>
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