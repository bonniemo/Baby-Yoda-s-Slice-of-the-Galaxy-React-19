import { useContext } from "react";
import uuid from "react-uuid";
import menu from "../../Data/Menu.json";
import { GlobalContext } from "../../State/GlobalStateContext";
import { Topping } from "../../Types/Types";

const SelectTopping = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const handleToppingChange = (
        toppingName: string,
        isChecked: boolean,
        toppingPrice: number
    ) => {
        if (isChecked) {
            dispatch({
                type: "ADD_TOPPING",
                payload: { name: toppingName, price: toppingPrice },
            });
        } else {
            dispatch({
                type: "REMOVE_CURRENT_TOPPING",
                payload: { name: toppingName, price: toppingPrice },
            });
        }
    };

    const handleOrder = () => {
        const currentBottom = state.currentBottom;
        const currentToppings = state.currentToppings;

        if (!currentBottom) {
            alert("Please select a bottom before placing the order.");
            return;
        }

        const totalPrice =
            currentBottom.price +
            currentToppings.reduce(
                (totalPrice: number, topping: Topping) =>
                    totalPrice + topping.price,
                0
            );

        dispatch({
            type: "ADD",
            payload: {
                toppings: currentToppings,
                bottom: currentBottom.name,
                id: uuid(),
                totalPrice: totalPrice,
            },
        });

        // Reset selections
        dispatch({ type: "RESET_CURRENT_PIZZA" });

        // Reset UI
    };

    return (
        <>
            <h3>Toppings</h3>
            <section className="choose__topping">
                {menu.toppings.map((topping) => (
                    <section key={topping.name} className="topping__wrapper">
                        <input
                            type="checkbox"
                            name={topping.name}
                            id={topping.name}
                            onChange={(e) =>
                                handleToppingChange(
                                    topping.name,
                                    e.target.checked,
                                    topping.price
                                )
                            }
                        />
                        <label htmlFor={topping.name}>
                            {topping.name}, {topping.price} kr
                        </label>
                    </section>
                ))}
                <button onClick={handleOrder}>Buy</button>
            </section>
        </>
    );
};

export default SelectTopping;
