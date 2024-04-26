import Styles from './Footer.module.css'
import Instagram from './imagens/instagram.jpeg'
import Facebook from './imagens/facebook.jpeg'
import Zap from './imagens/zap.jpeg'
import Tiktok from './imagens/tiktok.jpeg'




function Footer(){
    return(
        <footer>
            <p>Siga-nos em nossas redes sociais</p>
            <div className={Styles.imagens}>
                <img src={Instagram} alt="" />
                <img src={Facebook} alt="" />
                <img src={Tiktok} alt="" />
                <img src={Zap} alt="" />             
            </div>
            <p>Telefone de contato (11)4002-8922</p>
        </footer>
    )
}

export default Footer