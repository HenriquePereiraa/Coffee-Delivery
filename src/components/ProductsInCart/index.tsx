import { ChooseAmountCoffee } from "../ChooseAmountCoffee";
import {
  DividingLine,
  ProductsInCartContainer,
} from "./styles";

import coffeeImg from "../../assets/coffes/Type=Americano.png";
import ButtonCustom from "../ButtonCustom";
import { Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";

export function ProductsInCart() {
  return (
    <>
      <ProductsInCartContainer>
        <img src={coffeeImg} alt="café escolhido" />
        <div className="products_cart_info">
          <p>Expresso Tradicional</p>
          <div className="products_cart_info_functions">
            <ChooseAmountCoffee />
            <ButtonCustom
              title="remover"
              Icon={<Trash size={20} color={defaultTheme["purple-600"]} />}
            />
          </div>
        </div>
        <p className="price_coffee_in_cart">R$ 9,90</p>
      </ProductsInCartContainer>
      <DividingLine />
    </>
  );
}
