import { useContext } from "react";
import { CoffeeCartContext } from "../../context/CoffeeContext";
import { ProductsInCart } from "../ProductsInCart";
import {
  OrderCart,
  OrderCartContainer,
  SummaryItemsTotal,
  SummaryTotal,
  SummaryTotalContainer,
} from "./styles";

export default function ConfirmOrderCart() {
  const { coffees } = useContext(CoffeeCartContext);

  console.log(coffees)

  return (
    <OrderCartContainer>
      <h3>Cafés selecionados</h3>
      <OrderCart>
        {coffees.map((coffee) => {
          return (
            <ProductsInCart
              coffeeId={coffee.id}
              title={coffee.title}
              amount={coffee.amount}
              price={coffee.price}
              key={coffee.id}
            />
          );
        })}
        <SummaryTotalContainer>
          <SummaryItemsTotal>
            <span className="total_title_items">Total de itens</span>
            <span className="total_price_items">R$ 19,80</span>
          </SummaryItemsTotal>
          <SummaryItemsTotal>
            <span className="total_title_items">Entrega</span>
            <span className="total_price_items">R$ 3,20</span>
          </SummaryItemsTotal>
          <SummaryTotal>
            <span>Total</span>
            <span>R$ 23,00</span>
          </SummaryTotal>
        </SummaryTotalContainer>

        <button className="btn_confirm_order">confirmar pedido</button>
      </OrderCart>
    </OrderCartContainer>
  );
}
