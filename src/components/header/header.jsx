import './style.css'
import '../../index.css'
import Logo from '../../assets/logo.png'

export function Header() {
  return (
    <nav className="nav__container container">
      <img className="nav__logo" src={Logo} alt="Logo Bolos da Julya" />
      <ul className="nav__items-container">
        <li className="nav__items">
          <a className="nav__items-link" href="#">
            Home
          </a>
        </li>
        <li className="nav__items">
          <a className="nav__items-link" href="#about">
            Sobre mim
          </a>
        </li>
        <li className="nav__items">
          <a className="nav__items-link" href="#cardapio">
            Cardapio
          </a>
        </li>
        <li className="nav__items">
          <a className="nav__items-link" href="#">
            Galeria
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
