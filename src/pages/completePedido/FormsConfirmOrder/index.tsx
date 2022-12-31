import { MapPinLine } from "phosphor-react";
import { CompleteOrder, InputForm, TitleCofirmPayment } from "./styles";
import { defaultTheme } from "../../../styles/themes/default";

export function FormsConfirmOrder() {
  return (
    <CompleteOrder>
      <TitleCofirmPayment>
        <MapPinLine
          size={22}
          color={defaultTheme["yellow-600"]}
          className="icon"
        />
        <div className="chamada_titulo_complete_order">
          <p>Endereço de Entrega</p>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </TitleCofirmPayment>

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
  );
}
