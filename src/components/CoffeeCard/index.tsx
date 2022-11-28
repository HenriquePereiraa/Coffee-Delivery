import {
  CardInfoBuyCoffee,
  CoffeeCardContainer,
  CoffeeCardLabelType,
  DescriptionCoffee,
} from "./styles";
import Coffee1 from "../../assets/coffes/Type=Americano.png";

import { ShoppingCart } from "phosphor-react";

interface CoffeeCardProps {
  image: string
  labels: string[];
  title: string;
  description: string;
  price: string;
}

export function CoffeeCard({
  image,
  labels,
  title,
  description,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <CoffeeCardLabelType>
        {labels.map((label) => {
          return <span key={label}>{label}</span>;
        })}
      </CoffeeCardLabelType>

      <p className="coffee_title">{title}</p>

      <DescriptionCoffee>{description}</DescriptionCoffee>
      <CardInfoBuyCoffee>
        <div className="coffee_price">
          <span>R$</span>
          <strong>{price}</strong>
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
