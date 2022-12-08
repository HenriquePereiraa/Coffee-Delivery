import {
  CardInfoBuyCoffee,
  CoffeeCardContainer,
  CoffeeCardLabelType,
  DescriptionCoffee,
} from "./styles";

import { ShoppingCart } from "phosphor-react";
import { ChooseAmountCoffee } from "../ChooseAmountCoffee";
import { useState } from "react";

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

  const [amountCoffee, setAmountCoffee] = useState(1)

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

        <ChooseAmountCoffee amountCoffee={amountCoffee} setAmountCoffee={setAmountCoffee}/>

        <div className="coffee_cart">
          <ShoppingCart color="white" size={25} weight="fill" />
        </div>
      </CardInfoBuyCoffee>
    </CoffeeCardContainer>
  );
}
