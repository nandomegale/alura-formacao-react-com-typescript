import React from "react";
import useListarEventos from "../../state/hooks/useListarEventos";
import Evento from "../Evento";
import Filtro from "../Filtro";
import style from "./ListaDeEventos.module.scss";

const ListaDeEventos: React.FC = () => {
  const eventos = useListarEventos();

  return (
    <section>
      <Filtro />
      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
