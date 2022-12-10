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

  function addCoffeeCart(data: CoffeeData) {}

  function decreaseCoffeeCart(id: string) {}

  function removeCoffeeCart(id: string) {}

  return (
    <CoffeeCartContext.Provider
      value={{ coffees, addCoffeeCart, decreaseCoffeeCart, removeCoffeeCart }}
    >
      {children}
    </CoffeeCartContext.Provider>
  );
}
