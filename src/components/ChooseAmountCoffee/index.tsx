import React, { SetStateAction } from "react";
import { ChooseAmountCoffeeContainer } from "./styles";

interface ChooseAmountCoffeeProps {
  amountCoffee: number,
  setAmountCoffee: React.Dispatch<SetStateAction<number>>
}

export function ChooseAmountCoffee({amountCoffee, setAmountCoffee}: ChooseAmountCoffeeProps) {


  function handleReducingAmountCoffee() {
    setAmountCoffee((prevState) => prevState - 1 )
    if(amountCoffee <= 1) {
      setAmountCoffee(1)
    }
  }

  function handleIncreasedAmountCoffee() {
    setAmountCoffee((prevState) => prevState + 1 )
  }
  return (
    <ChooseAmountCoffeeContainer>
      <span onClick={handleReducingAmountCoffee}>-</span>
      <span>{amountCoffee}</span>
      <span onClick={handleIncreasedAmountCoffee}>+</span>
    </ChooseAmountCoffeeContainer>
  );
}
