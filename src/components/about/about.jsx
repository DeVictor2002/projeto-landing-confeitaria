import './style.css'
import Chef from '../../assets/chef-julya.png'

export function About() {
  return (
    <section className="about-container container ">
      <div className="card" id="about">
        <img className="about__img container" src={Chef} alt="Foto da Chef Julya" />
        <div className="about__content">
          <h1 className="about-title">Chef Julya</h1>
          <p className="about-p">
            Olá! Meu nome é Julya, e sou uma apaixonada por doces, bolos e tudo o que
            envolve o universo da confeitaria. Desde pequena, sempre tive um carinho
            especial pela cozinha, especialmente quando se tratava de transformar
            ingredientes simples em verdadeiras obras de arte açucaradas. Minha jornada na
            confeitaria começou como um hobby, mas logo percebi que era muito mais do que
            isso: era minha vocação. Decidi me dedicar de coração a essa arte, aprimorando
            minhas técnicas através de cursos, muita prática e, é claro, experimentações
            deliciosas e algumas nem tanto, mas que me ensinaram muito!.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
