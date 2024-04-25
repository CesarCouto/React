import wallpaper from '../imagens/wallpaper.png'
import './titulo.module.css'


function Titulo(){
    return (
        <header>
            <img src={wallpaper} alt="imagem ariel" />
            <h1>Este é o cabeçario</h1>
        </header>
    )
}

export default Titulo