import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const filtro = get(filtroDeEventos);
    const todosOsEventos = get(listaDeEventosState);
    const eventoComStatus = todosOsEventos.filter((evento) =>
      filtro.status === "Completos"
        ? evento.completo
        : filtro.status === "Incompletos"
        ? !evento.completo
        : true
    );
    const eventos = eventoComStatus.filter((evento) => {
      if (!filtro.data) {
        return true;
      } else {
        const eHOMesmoDia =
          evento.inicio.toISOString().slice(0, 10) ===
          filtro.data.toISOString().slice(0, 10);
        return eHOMesmoDia;
      }
    });
    return eventos;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    const respostaHttp = await fetch("http://localhost:8000/eventos");
    const eventosJson: IEvento[] = await respostaHttp.json();
    return eventosJson.map((evento) => ({
      ...evento,
      inicio: new Date(evento.inicio),
      fim: new Date(evento.fim),
    }));
  },
});
