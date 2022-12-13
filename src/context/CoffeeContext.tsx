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
  decreaseCoffeeCart: (id: string) => void;
  removeCoffeeCart: (id: string) => void;
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

  function decreaseCoffeeCart(id: string) {
    const coffeesCartUpdated = coffees.map((coffee) => {
      if (coffee.id === id) {
        coffee.amount = coffee.amount - 1;
      }
    });

    //atualizar estado
    console.log(coffeesCartUpdated);
  }

  function removeCoffeeCart(id: string) {
    const coffeesCartUpdated = coffees.filter((coffee) => coffee.id !== id);

    //atualizar estado
    console.log(coffeesCartUpdated);
  }

  return (
    <CoffeeCartContext.Provider
      value={{ coffees, addCoffeeCart, decreaseCoffeeCart, removeCoffeeCart }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
