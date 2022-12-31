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
  const { coffees, valueTotalInCart } = useContext(CoffeeCartContext);
  const frete = 3.2;

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
          {coffees.length ? (
            <>
              <SummaryItemsTotal>
                <span className="total_title_items">Total de itens</span>
                <span className="total_price_items">
                  R$ {valueTotalInCart.toFixed(2)}
                </span>
              </SummaryItemsTotal>
              <SummaryItemsTotal>
                <span className="total_title_items">Entrega</span>
                <span className="total_price_items">R$ {frete.toFixed(2)}</span>
              </SummaryItemsTotal>
              <SummaryTotal>
                <span>Total</span>
                <span>R$ {(valueTotalInCart + 3.2).toFixed(2)}</span>
              </SummaryTotal>
            </>
          ) : (
            <h1>Carrinho vazio... 🥺</h1>
          )}
        </SummaryTotalContainer>

        <button className="btn_confirm_order">confirmar pedido</button>
      </OrderCart>
    </OrderCartContainer>
  );
}
