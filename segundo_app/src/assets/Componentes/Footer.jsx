import styles from './Footer.module.css'
import sol from '../imagens/sol.jpg'




function Footer(){
    return(
        <>
            <h1 className={styles.joao}>Este é o footer</h1>
            <img src={sol} alt="imagem do sol" className={styles.imagem} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ad quam. Delectus sequi nam facere ex facilis sint aperiam ullam ipsam enim? Odit error dicta perferendis excepturi. Cupiditate, excepturi sed?
            Voluptates assumenda voluptas nisi aut ab eum a, sapiente repudiandae sit beatae odio provident sed in commodi illum dicta minus laboriosam necessitatibus magni amet at recusandae! Quis ex tempora ullam?
            Repellendus corporis rerum, voluptatibus at officiis dolor. Vel molestias officia ullam esse mollitia fugiat necessitatibus animi totam inventore quisquam sunt, iusto ut provident deleniti adipisci fugit quaerat est quo assumenda.
            Mollitia explicabo in architecto amet? Delectus atque, nostrum ipsum magnam sunt minus assumenda unde doloribus corporis quam? Tenetur consequuntur quidem, nulla illo unde maiores quia exercitationem beatae eius, eos laborum.</p>
        </>
    )
}

export default Footer