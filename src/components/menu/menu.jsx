import './style.css'
import Cardapio from '../../assets/cardapio.jpeg'

export function Menu() {
  return (
    <section className='menu-container'>
      <div className='menu-text'>
        <h1 id='cardapio' className='menu-title'>Cardapio</h1>
        <div className='menu-description'>
          <p>Delicie-se com nossos doces feitos com muito carinho. Explore nosso cardápio e escolha seu favorito!</p>
          <p><strong>Observação:</strong> Você pode personalizar o recheio do seu doce! Para isso, basta fazer a encomenda com 5 dias de antecedência. Garanta que o seu pedido seja perfeito e sob medida para você!</p>
        </div>

      </div>

      <img className='menu-img' src={Cardapio} alt="Cardapio da Chef Julya" />
    </section>
  )
}

export default Menu
