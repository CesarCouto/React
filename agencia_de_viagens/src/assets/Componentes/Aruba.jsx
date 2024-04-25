import Styles from './Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Aruba from './imagens/bandeira_aruba.jfif'

function Aruba(){
    return(
        <div className={Styles.fundo}>
          <ComponenteProps 
           lugar="Paises Baixos"
           texto="Bem-vindo ao destino dos sonhos, onde praias de areias brancas se encontram com águas cristalinas em tons de azul-turquesa. Em Aruba, você será recebido pelo caloroso sol do Caribe e pela brisa suave que acaricia sua pele, convidando-o a explorar um paraíso tropical como nenhum outro."
           bandeira={Bandeira_Aruba}
          
          
          />
        </div>
    )
}

export default Aruba