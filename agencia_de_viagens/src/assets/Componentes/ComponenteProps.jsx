import Styles from './ComponenteProps.module.css'


function ComponenteProps({lugar, texto, bandeira}){
    return(
        <div className={Styles.corpo_texto}>
            <h2>Venha explorar este lugar incrivel. Venha conhecer {lugar}</h2>
            <p>{texto} </p>
            <img className={Styles.imagem} src={bandeira} alt="logo" />
        </div>
    )
}

export default ComponenteProps