import { Reducer } from "react";
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

interface PayloadActionProps {
  coffee: CoffeeData;
  id: string;
  amount: number;
}

type CoffeeAction = {
  type: string;
  payload: PayloadActionProps;
};

export const coffeesReducer: Reducer<CoffeeProps, CoffeeAction> = (
  state,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_NEW_COFFEE:
      const coffeeId = payload.coffee.id;
      
      const index = state.coffees.findIndex((coffee) => {
        return coffee.id === coffeeId;
      });

      if (index >= 0) {
        
        const tempCoffees = [...state.coffees];

        console.log(tempCoffees[index].amount)
        return {
          ...state,
          coffees: [...tempCoffees],
        };
      }
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

    default:
      return {
        state,
      };
  }
};
