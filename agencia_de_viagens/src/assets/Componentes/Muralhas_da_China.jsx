import ComponenteProps from './ComponenteProps'
import Styles from './Muralhas_da_China.module.css'
import Bandeira_China from './imagens/bandeira_china.jfif'

function Muralhas_da_China(){
    return(
        <div className={Styles.fundo}>
           <ComponenteProps 
           lugar="China"
           texto="Bem-vindo a um dos tesouros mais impressionantes da humanidade: as majestosas Muralhas da China. Prepare-se para ser transportado através dos séculos enquanto explora esta maravilha arquitetônica que permanece como um testemunho vivo da história e da grandiosidade da civilização chinesa."
           bandeira={Bandeira_China}
           
           />
        </div>
    )
}

export default Muralhas_da_China