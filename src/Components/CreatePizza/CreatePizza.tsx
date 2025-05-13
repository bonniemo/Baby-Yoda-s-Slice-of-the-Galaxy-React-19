import jabba from "../../Images/jabba.png";
import { CartVisibleType } from "../../Types/Types";
import Cart from "../Cart/Cart";
import "./CheckBoxes.scss";
import "./CreatePizza.scss";
import "./RadioButtons.scss";
import SelectBottom from "./SelectBottom";
import SelectTopping from "./SelectTopping";

const CreatePizza = ({ cartVisible }: CartVisibleType) => {
    return (
        <>
            <article className="create-pizza" id="order">
                <section className="create-pizza__top-section">
                    <SelectBottom />
                    <img src={jabba} alt="" className="create-pizza__img " />
                </section>
                <SelectTopping />
                {cartVisible && <Cart />}
            </article>
        </>
    );
};

export default CreatePizza;
