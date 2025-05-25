import './style.css'
import Cake from '../../assets/cake.png'

export function Hero() {
  return (
    <main className="hero__container container">
      <section className="hero__content">
        <h1>
          Bem-vindo à Confeitaria da <span className="title-top">Chef Julya!</span>
        </h1>
        <p>
          Seja bem-vindo ao doce mundo da Chef Julya, onde cada sobremesa é feita com
          carinho, dedicação e os melhores ingredientes. Nossa paixão é transformar
          momentos especiais em memórias inesquecíveis, oferecendo bolos, doces e
          sobremesas artesanais que encantam o paladar e o coração.
        </p>
        <a className="hero__btn-cta" href="https://wa.me/11952996182?text=Olá%20Chef%20Julya,%20gostaria%20de%20fazer%20uma%20encomenda." target='_blank'>
          Faça sua encomenda
        </a>
      </section>
      <img className="hero__img container" src={Cake} />
    </main>
  )
}

export default Hero
