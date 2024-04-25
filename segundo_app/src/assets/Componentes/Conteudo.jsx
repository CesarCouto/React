import styles from './Conteudo.module.css'
import wallpaper from '../imagens/wallpaper.png'



function Conteudo(){

    return(

        <>
        <h1 className={styles.titulo}>Conteudo da pagina</h1>
        <p className={styles.texto}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam adipisci ducimus ad non hic nulla debitis voluptas perspiciatis tempora dolorum ipsa provident illum saepe, alias ea commodi quas quam unde.</p>
        <img src={wallpaper} alt="imagem de fundo" className={styles.img} />
        
        </>

    )
}

export default Conteudo