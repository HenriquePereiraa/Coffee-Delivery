import { createContext, ReactNode, useState } from "react";

interface CoffeeData {
  id: string;
  title: string;
  price: number;
  amount: number;
}

interface CoffeeCartContextType {
  coffees: CoffeeData[];
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

  function addCoffeeCart(data: CoffeeData) {
    setCoffees((state) => [...state, data]);
  }

  function removeCoffeeCart(id: string) {
    const coffeesCartUpdated = coffees.filter((coffee) => coffee.id !== id);

    //atualizar estado
    console.log(coffeesCartUpdated);
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
        addCoffeeCart,
        removeCoffeeCart,
        updatedAmountCoffeeInCart,
      }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
