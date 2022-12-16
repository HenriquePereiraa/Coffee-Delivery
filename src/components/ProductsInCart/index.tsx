import { ChooseAmountCoffee } from "../ChooseAmountCoffee";
import { DividingLine, ProductsInCartContainer } from "./styles";

import coffeeImg from "../../assets/coffes/Type=Americano.png";
import ButtonCustom from "../ButtonCustom";
import { Trash } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useContext, useEffect, useState } from "react";
import { CoffeeCartContext } from "../../context/CoffeeContext";

interface ProductsInCartProps {
  coffeeId: string;
  title: string;
  amount: number;
  price: number;
}

export function ProductsInCart({
  coffeeId,
  title,
  amount,
  price,
}: ProductsInCartProps) {
  const [amountCoffee, setAmountCoffee] = useState(amount);
  const { updatedAmountCoffeeInCart, removeCoffeeCart } = useContext(CoffeeCartContext);

  useEffect(() => {
    console.log({
      id: coffeeId,
      amount: amountCoffee,
    });

    updatedAmountCoffeeInCart(coffeeId, amountCoffee);
  }, [amountCoffee]);

  return (
    <>
      <ProductsInCartContainer>
        <img src={coffeeImg} alt="café escolhido" />
        <div className="products_cart_info">
          <p>{title}</p>
          <div className="products_cart_info_functions">
            <ChooseAmountCoffee
              amountCoffee={amountCoffee}
              setAmountCoffee={setAmountCoffee}
            />
            <ButtonCustom
              title="remover"
              Icon={<Trash size={20} color={defaultTheme["purple-600"]} />}
            />
          </div>
        </div>
        <p className="price_coffee_in_cart">R$ {price}</p>
      </ProductsInCartContainer>
      <DividingLine />
    </>
  );
}
