import {
  CardInfoBuyCoffee,
  CoffeeCardContainer,
  CoffeeCardLabelType,
  DescriptionCoffee,
} from "./styles";
import Coffee1 from "../../assets/coffes/Type=Americano.png";
import { defaultTheme } from "../../styles/themes/default";

import { ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Coffee1} alt="" />
      <CoffeeCardLabelType>
        <span>Tradicional</span>
      </CoffeeCardLabelType>

      <p className="coffee_title">Expresso Tradicional</p>

      <DescriptionCoffee>
        O tradicional café feito com água quente e grãos moídos
      </DescriptionCoffee>
      <CardInfoBuyCoffee>
        <div className="coffee_price">
          <span>R$</span>
          <strong>9,90</strong>
        </div>

        <div className="coffee_quantidade">
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </div>

        <div className="coffee_cart">
          <ShoppingCart color="white" size={25} weight="fill" />
        </div>
      </CardInfoBuyCoffee>
    </CoffeeCardContainer>
  );
}
