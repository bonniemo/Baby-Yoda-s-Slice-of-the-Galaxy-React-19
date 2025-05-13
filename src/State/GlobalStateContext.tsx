import { createContext } from "react";
import { Action, PizzaState } from "../Types/Types";

export const InitialPizzaState: PizzaState = {
    pizzas: [],
    currentBottom: null,
    currentToppings: [],
};

export const GlobalContext = createContext<{
    state: PizzaState;
    dispatch: React.Dispatch<Action>;
}>({
    state: InitialPizzaState,
    dispatch: () => null,
});
