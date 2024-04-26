import Styles from './Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_Escocia from './imagens/bandeira_escocia.png'




function Escocia(){
    return(
        <div className={Styles.escocia}>
           <ComponenteProps 
           lugar="Escocia"
            texto=" Explore a magnífica terra das colinas ondulantes, dos castelos imponentes e da cultura rica que é a Escócia. Este é um país que cativa os corações dos viajantes com sua paisagem deslumbrante e sua história fascinante."           
            bandeira={Bandeira_Escocia}
           />
        </div>
       
    )
}

export default Escocia