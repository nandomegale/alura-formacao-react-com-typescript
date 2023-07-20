import { RecoilRoot } from "recoil";
import style from "./App.module.scss";
import Calendario from "./components/Calendario";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import ListaDeEventos from "./components/ListaDeEventos";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback="Está Carregando">
        <div className={style.App}>
          <div className={style.Coluna}>
            <Card>
              <Formulario />
            </Card>
            <hr />
            <Card>
              <ListaDeEventos />
            </Card>
          </div>
          <div className={style.Coluna}>
            <Calendario />
          </div>
        </div>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
