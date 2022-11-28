import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ConfirmOrder } from "./pages/completePedido";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/confirmar-pedido" element={<ConfirmOrder />} />
        <Route path="/pedido-confirmado" />
      </Route>
    </Routes>
  );
}
