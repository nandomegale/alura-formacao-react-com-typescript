//para renderizar svg como imagem
// import logo from "../../assets/logo.svg";
//para renderizar svg como svg
import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";

export default function Menu() {
  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];

  return (
    <nav className={styles.menu}>
      {/* para renderizar svg como imagem
        <img src={logo} alt="Logo do Aluroni" /> */}
      <Logo />
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link}>
            {/* usando a tag 'a' acontece um reload da página.
            isso não é bom em uma SPA */}
            {/* <a href={rota.to}>{rota.label}</a> */}
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
