import { CreditCard, CurrencyDollar } from "phosphor-react";
import {
  ButtonPaymentMode,
  ButtonsModePayment,
  TitleConfirmPayment,
  ModePaymentContainer,
} from "./styles";
import { defaultTheme } from "../../../styles/themes/default";

export function ModePayment() {
  return (
    <ModePaymentContainer>
      <TitleConfirmPayment>
        <CurrencyDollar
          size={22}
          color={defaultTheme["purple-600"]}
          className="icon"
        />
        <div className="chamada_titulo_complete_order">
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </TitleConfirmPayment>

      <ButtonsModePayment>
        <ButtonPaymentMode>
          <CreditCard size={20} color={defaultTheme["purple-600"]} />
          CARTÃO DE CRÉDITO
        </ButtonPaymentMode>
        <ButtonPaymentMode>
          <CreditCard size={20} color={defaultTheme["purple-600"]} />
          CARTÃO DE DÉBITO
        </ButtonPaymentMode>
        <ButtonPaymentMode>
          <CreditCard size={20} color={defaultTheme["purple-600"]} />
          DINHEIRO
        </ButtonPaymentMode>
      </ButtonsModePayment>
    </ModePaymentContainer>
  );
}
