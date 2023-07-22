import styles from "./Prato.module.scss";
//import { useLocation } from "react-router-dom";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import cardapio from "data/cardapio.json";
import TagsPrato from "components/TagsPrato";
import NotFound from "pages/NotFound";

export default function Prato() {
  //const { state } = useLocation();
  //const { prato } = state as { prato: Prato };
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find((item) => item.id === Number(id));
  if (!prato) {
    //NÃO ESTÁ NAVEGANDO PARA NOTFOUND PQ NÃO EXISTE
    //UMA ROTA 'NOTFOUND' MAS SIM APRESENTANDO O COMPONENT NA TELA
    //return <NotFound />;
    return <Navigate to="not-found" />
  }
  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>{prato.title}</h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>{prato.description}</p>
          <TagsPrato {...prato} />
        </div>
      </section>
    </>
  );
}
