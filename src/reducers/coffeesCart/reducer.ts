import { ActionTypes } from "./actions";

export interface CoffeeData {
  id: string;
  title: string;
  price: number;
  amount: number;
}

interface CoffeeProps {
  coffees: CoffeeData[];
}

export function coffeesReducer(state: CoffeeProps, action: any) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_NEW_COFFEE:
      return {
        ...state,
        coffees: [...state.coffees, payload.coffee],
      };

    case ActionTypes.REMOVE_COFFEE_CART:
      return {
        ...state,
        coffees: state.coffees.filter((coffee) => coffee.id !== payload.id),
      };

    case ActionTypes.UPDATE_AMOUNT_COFFEE_IN_CART:
      const coffeeIndex = state.coffees.findIndex((coffee) => {
        return coffee.id === payload.id;
      });

      const tempCoffees = [...state.coffees];

      tempCoffees[coffeeIndex].amount = payload.amount;

      return {
        coffees: [...tempCoffees],
      };
  }
}
