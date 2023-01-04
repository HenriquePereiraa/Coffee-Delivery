import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import { coffeesReducer } from "../reducers/coffeesCart/reducer";
import {
  addNewCoffee,
  removeCoffee,
  updatedAmountCoffee,
} from "../reducers/coffeesCart/actions";

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
  const [coffeeState, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: [],
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:coffeeState-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }
    }
  );

  const [valueTotalInCart, setValueTotalInCart] = useState(0);

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeState);

    localStorage.setItem("@coffee-delivery:coffeeState-1.0.0", stateJSON);
  }, [coffeeState]);

  const { coffees } = coffeeState;
  
  useEffect(() => {
    let priceTotal = coffees.reduce(
      (prevValue, elementCurrent) =>
        prevValue + elementCurrent.price * elementCurrent.amount,
      0
    );

    setValueTotalInCart(priceTotal);
  }, [coffees]);

  function addCoffeeCart(data: CoffeeData) {
    dispatch(addNewCoffee(data));
  }

  function removeCoffeeCart(id: string) {
    dispatch(removeCoffee(id));
  }

  function updatedAmountCoffeeInCart(id: string, newAmount: number) {
    dispatch(updatedAmountCoffee(id, newAmount));
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
