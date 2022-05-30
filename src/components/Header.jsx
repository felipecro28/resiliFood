import style from "../css/Header.module.css";
import Button from "./Button";
import ResFoodDark from "../assets/ResFoodDark.png"

export default function Header() {
  return (
    <div>
      <nav className={style.navbar}>
        <img className={style.logotipo} src={ResFoodDark} alt="Logo ResFood" />
        <p>Aberto de 18h - 00h</p>
        <ul className={style.listaItens}>
          <li>
            <a>Pizzas</a>
          </li>
          <li>
            <a>Massas</a>
          </li>
          <li>
            <a>Bebidas</a>
          </li>
          <li>
            <Button texto="PEDIR" />
          </li>
          <li>
            <Button texto="CARRINHO" />
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
