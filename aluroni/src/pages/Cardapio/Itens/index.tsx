import cardapio from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(cardapio);

  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenarPropriedadeCrescente(
    lista: typeof cardapio,
    propriedade: "size" | "serving" | "price"
  ) {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  }

  function ordenar(lista: typeof cardapio) {
    switch (ordenador) {
      case "porcao":
        //return lista.sort((a, b) => (a.size > b.size ? 1 : -1));
        return ordenarPropriedadeCrescente(lista, "size");
      case "qtd_pessoas":
        //return lista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
        return ordenarPropriedadeCrescente(lista, "serving");
      case "preco":
        //return lista.sort((a, b) => (a.price > b.price ? 1 : -1));
        return ordenarPropriedadeCrescente(lista, "price");
      default:
        return lista;
    }
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => {
        return (
          //MANEIRA CORRETA DE PASSAR PARA EVITAR QUE ENVIE COISAS DESNECESSÁRIAS
          //CASO A API MUDE
          //   <Item
          //     key={item.id}
          //     title={item.title}
          //     description={item.description}
          //     photo={item.photo}
          //     size={item.size}
          //     serving={item.serving}
          //     price={item.price}
          //     id={item.id}
          //     category={item.category}
          //   />
          <Item key={item.id} {...item} />
        );
      })}
    </div>
  );
}
