import { CoffeeData } from "./reducer";


export enum ActionTypes {
  ADD_NEW_COFFEE = "ADD_NEW_COFFEE",
  REMOVE_COFFEE_CART = "REMOVE_COFFEE_CART",
  UPDATE_AMOUNT_COFFEE_IN_CART = "UPDATE_AMOUNT_COFFEE_IN_CART",
}

export function addNewCoffee(coffee: CoffeeData) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    },
  };
}

export function removeCoffee(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE_CART,
    payload: {
      id,
    },
  };
}

export function updatedAmountCoffee(id: string, amount: number) {
  return {
    type: ActionTypes.UPDATE_AMOUNT_COFFEE_IN_CART,
    payload: {
      id,
      amount,
    },
  };
}
