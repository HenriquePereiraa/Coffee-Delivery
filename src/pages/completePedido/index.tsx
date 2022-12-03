import { CreditCard, CurrencyDollar, MapPinLine } from "phosphor-react";
import ConfirmOrderCart from "../../components/ConfirmOrderCart";
import { OrderCartContainer } from "../../components/ConfirmOrderCart/styles";
import { ProductsInCart } from "../../components/ProductsInCart";
import { defaultTheme } from "../../styles/themes/default";
import {
  ButtonPaymentMode,
  ButtonsModePayment,
  CompleteOrder,
  CompleteOrderContainer,
  ConfirmOrderContainer,
  InputForm,
  ModePayment,
  TitleCofirmPayment,
} from "./styles";

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <CompleteOrderContainer>
        <h3>Complete seu pedido</h3>
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
        <ModePayment>
          <TitleCofirmPayment>
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
          </TitleCofirmPayment>

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
        </ModePayment>
      </CompleteOrderContainer>
      <ConfirmOrderCart />

      {/* <OrderCartContainer /> */}
    </ConfirmOrderContainer>
  );
}
