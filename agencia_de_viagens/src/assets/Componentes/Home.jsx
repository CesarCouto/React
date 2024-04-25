import Styles from './Home.module.css'
import Mala from './imagens/mala.jpeg'

function Home(){
    return(
      <main>
          <div>
            <img className={Styles.imagem} src={Mala} alt="" />
          </div>

          <div>
            <h1 className={Styles.titulo}>Encontre aqui a viagem dos seus sonhos!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi veritatis blanditiis eum voluptatem. Doloribus aliquid, aspernatur nostrum delectus quod modi eveniet dolores ducimus dolorem nesciunt voluptate blanditiis consectetur incidunt!</p>
          </div>
      </main>
    )
}

export default Home