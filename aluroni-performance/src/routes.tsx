import Footer from "components/Footer";
import Loader from "components/Loader";
import Menu from "components/Menu";
//import PaginaPadrao from "components/PaginaPadrao";
// import Cardapio from "pages/Cardapio";
//import Inicio from "pages/Inicio";
//import NotFound from "pages/NotFound";
//import Prato from "pages/Prato";
//import Sobre from "pages/Sobre";

import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

const PaginaPadrao = lazy(() => import("components/PaginaPadrao"));
const Inicio = lazy(() => import("pages/Inicio"));
const Cardapio = lazy(() => import("pages/Cardapio"));
const Sobre = lazy(() => import("pages/Sobre"));
const Prato = lazy(() => import("pages/Prato"));
const NotFound = lazy(() => import("pages/NotFound"));

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path="cardapio" element={<Cardapio />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="prato/:id" element={<Prato />} />
            </Route>
            <Route path="*" element={<Navigate to="/not-found" />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
