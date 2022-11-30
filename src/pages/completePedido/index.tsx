import { MapPinLine } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import {
  CompleteOrder,
  CompleteOrderContainer,
  ConfirmOrderContainer,
  InputForm,
  OrderCart,
} from "./styles";

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <CompleteOrderContainer>
        <h3>Complete seu pedido</h3>
        <CompleteOrder>
          <div className="titulo_complete_order">
            <MapPinLine size={24} color={defaultTheme["yellow-600"]} />
            <div className="chamada_titulo_complete_order">
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <form>
            <div className="inputContainer">
              <InputForm type="text" placeholder="CEP" maxWidth={200} />
            </div>
            <div className="inputContainer">
              <InputForm type="text" placeholder="Rua" />
            </div>
            <div className="inputContainer">
              <InputForm type="text" placeholder="Número" maxWidth={200} />
              <InputForm type="text" placeholder="Complemento" maxWidth={348} />
            </div>
            <div className="inputContainer">
              <InputForm type="text" placeholder="Bairro" maxWidth={200} />
              <InputForm type="text" placeholder="Cidade" maxWidth={276} />
              <InputForm type="text" placeholder="UF" maxWidth={60} />
            </div>
          </form>
        </CompleteOrder>
      </CompleteOrderContainer>
      <OrderCart>
        <h2>Cafés selecionados</h2>
      </OrderCart>
    </ConfirmOrderContainer>
  );
}
