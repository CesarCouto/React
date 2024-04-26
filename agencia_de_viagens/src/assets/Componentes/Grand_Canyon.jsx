import ComponenteProps from './ComponenteProps'
import Styles from './Grand_Canyon.module.css'
import Bandeira_America from './imagens/bandeira_america.png'

function Grand_Canyon(){
    return(
        <div className={Styles.fundo}>
            <ComponenteProps 
            lugar="Grand Canyon"
            texto="Bem-vindo ao Grand Canyon, um dos destinos mais emblemáticos e inspiradores da natureza. Prepare-se para uma jornada que o levará a um mundo de beleza indescritível, onde as rochas contam histórias de milhões de anos e as vistas deixam você sem fôlego."
            bandeira={Bandeira_America}
            
            />
        </div>
    )
}

export default Grand_Canyon 