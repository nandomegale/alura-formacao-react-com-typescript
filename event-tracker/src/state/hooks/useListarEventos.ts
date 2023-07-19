import { useRecoilValue } from "recoil";
import { listaDeEventosState } from "../atom";

const useListarEventos = () => {
  return useRecoilValue(listaDeEventosState);
};

export default useListarEventos;
