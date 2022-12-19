import { createContext, ReactNode, useEffect, useState } from "react";

interface CoffeeData {
  id: string;
  title: string;
  price: number;
  amount: number;
}

interface CoffeeCartContextType {
  coffees: CoffeeData[];
  valueTotalInCart: number;
  addCoffeeCart: (data: CoffeeData) => void;
  removeCoffeeCart: (id: string) => void;
  updatedAmountCoffeeInCart: (id: string, newAmount: number) => void;
}

interface CoffeeCartContextProviderProps {
  children: ReactNode;
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType);

export function CoffeeCartContextProvider({
  children,
}: CoffeeCartContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeData[]>([]);
  const [valueTotalInCart, setValueTotalInCart] = useState(0);

  useEffect(() => {
    let priceTotal = coffees.reduce(
      (prevValue, elementCurrent) =>
        prevValue + elementCurrent.price * elementCurrent.amount,
      0
    );

    setValueTotalInCart(priceTotal);
  }, [coffees]);

  function addCoffeeCart(data: CoffeeData) {
    setCoffees((state) => [...state, data]);
  }

  function removeCoffeeCart(id: string) {
    const coffeesCartUpdated = coffees.filter((coffee) => coffee.id !== id);

    setCoffees(coffeesCartUpdated);
  }

  function updatedAmountCoffeeInCart(id: string, newAmount: number) {
    const coffeeIndex = coffees.findIndex((coffee) => {
      return coffee.id === id;
    });

    const tempCoffees = [...coffees];

    tempCoffees[coffeeIndex].amount = newAmount;

    setCoffees(tempCoffees);
  }

  return (
    <CoffeeCartContext.Provider
      value={{
        coffees,
        valueTotalInCart,
        addCoffeeCart,
        removeCoffeeCart,
        updatedAmountCoffeeInCart,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
