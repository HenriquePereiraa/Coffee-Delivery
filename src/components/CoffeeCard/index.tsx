import {
  CardInfoBuyCoffee,
  CoffeeCardContainer,
  CoffeeCardLabelType,
  DescriptionCoffee,
} from "./styles";

import { ShoppingCart } from "phosphor-react";
import { ChooseAmountCoffee } from "../ChooseAmountCoffee";
import { useContext, useState } from "react";
import { CoffeeCartContext } from "../../context/CoffeeContext";

interface CoffeeCardProps {
  id: string;
  image: string;
  labels: string[];
  title: string;
  description: string;
  price: number;
}

export function CoffeeCard({
  id,
  image,
  labels,
  title,
  description,
  price,
}: CoffeeCardProps) {
  const [amountCoffee, setAmountCoffee] = useState(1);
  const { addCoffeeCart } = useContext(CoffeeCartContext);

  function handleAddToCart() {
    const info = {
      id,
      title,
      price,
      amount: amountCoffee,
    };

    addCoffeeCart(info);
  }

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
          <strong>{price.toFixed(2)}</strong>
        </div>

        <ChooseAmountCoffee
          amountCoffee={amountCoffee}
          setAmountCoffee={setAmountCoffee}
        />

        <div className="coffee_cart" onClick={handleAddToCart}>
          <ShoppingCart color="white" size={25} weight="fill" />
        </div>
      </CardInfoBuyCoffee>
    </CoffeeCardContainer>
  );
}
