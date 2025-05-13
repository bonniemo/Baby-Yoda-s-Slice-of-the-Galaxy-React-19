export type PizzaContextProp = {
    children: React.ReactNode;
};

export type CartVisibleType = {
    cartVisible: boolean;
};

export type SetCartVisibleTypes = CartVisibleType & {
    setCartVisible: (value: boolean) => void;
};

export type HandleToppingChange = (
    toppingName: string,
    isChecked: boolean,
    toppingPrice: number
) => void;

export type Topping = {
    name: string;
    price: number;
};

export type Pizza = {
    id: string;
    toppings: Topping[];
    bottom: string;
    totalPrice: number;
};

export type PizzaState = {
    pizzas: Pizza[];
    currentBottom: { name: string; price: number } | null;
    currentToppings: Topping[];
};

export type Action =
    | { type: "ADD"; payload: Pizza }
    | { type: "REMOVE"; payload: string }
    | {
          type: "UPDATE_SIZE";
          payload: { id: string; newSize: string };
      }
    | {
          type: "REMOVE_TOPPING";
          payload: { id: string; toppingName: string; toppingPrice: number };
      }
    | { type: "SET_CURRENT_BOTTOM"; payload: { name: string; price: number } }
    | { type: "ADD_TOPPING"; payload: Topping }
    | {
          type: "REMOVE_CURRENT_TOPPING";
          payload: { name: string; price: number };
      }
    | { type: "RESET_CURRENT_PIZZA" };
