import { useState } from "react";
import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
//para renderizar svg como imagem
// import logo from "../../assets/logo.svg";
//para renderizar svg como svg
import { ReactComponent as Logo } from "assets/logo.svg";
import Filtros from "./Filtros";
import Ordenador, { OpcoesOrdenador } from "./Ordenador";
import Itens from "./Itens";

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState<OpcoesOrdenador>("");

  return (
    <main>
      <nav className={styles.menu}>
        {/* para renderizar svg como imagem
        <img src={logo} alt="Logo do Aluroni" /> */}
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca}></Buscador>
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}
