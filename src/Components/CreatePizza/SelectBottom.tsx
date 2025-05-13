import { useContext, useState } from "react";
import menu from "../../Data/Menu.json";
import { GlobalContext } from "../../State/GlobalStateContext";

const SelectBottom = () => {
    const { dispatch } = useContext(GlobalContext);
    const [chosenBottom, setChosenBottom] = useState<{
        name: string;
        price: number;
    } | null>(null);

    const handleBottomChange = (name: string, price: number) => {
        setChosenBottom({ name, price });
        dispatch({
            type: "SET_CURRENT_BOTTOM",
            payload: { name, price },
        });
    };

    return (
        <section>
            <h3>Size</h3>
            <section className="bottom-radio-wrapper">
                {menu.bottoms.map((bottom) => (
                    <section className="choose__radio" key={bottom.name}>
                        <input
                            type="radio"
                            name={"bottom"}
                            id={bottom.name}
                            onChange={() =>
                                handleBottomChange(bottom.name, bottom.price)
                            }
                        />
                        <label htmlFor={bottom.name}>
                            {bottom.name}, {bottom.price} kr
                        </label>
                    </section>
                ))}
            </section>
        </section>
    );
};

export default SelectBottom;
