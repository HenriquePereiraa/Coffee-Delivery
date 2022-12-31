import ConfirmOrderCart from "../../components/ConfirmOrderCart";
import {
  CompleteOrderContainer,
  ConfirmOrderContainer,
} from "./styles";
import { FormsConfirmOrder } from "./FormsConfirmOrder";
import { ModePayment } from "./ModePayment";

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <CompleteOrderContainer>
        <h3>Complete seu pedido</h3>
        <FormsConfirmOrder/>
        <ModePayment/>
      </CompleteOrderContainer>
      <ConfirmOrderCart />
    </ConfirmOrderContainer>
  );
}
