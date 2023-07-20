import { useRecoilValue } from "recoil";
import { eventosFiltradosState } from "../seletores";

const useListarEventos = () => {
  return useRecoilValue(eventosFiltradosState);
};

export default useListarEventos;
