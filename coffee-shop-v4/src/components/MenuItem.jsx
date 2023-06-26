import { useState } from "react";

const MenuItem = ({ imgUrl, name, id }) => {

    const [remFromCartBtnVisible, setRemFromCartBtnVisible] = useState(false);

    const toggleRemFromCartBtnVisibility = () => setRemFromCartBtnVisible(!remFromCartBtnVisible);

    return ( 
        <section class="menu-item">
            <img src={imgUrl} alt={id} />
                <h3 id={`${id}-txt`}>{name}</h3>
                <button 
                    onClick={toggleRemFromCartBtnVisibility}
                    class="add-to-cart-button" 
                    id={`${id}-btn`}>add to cart
                </button>
                { remFromCartBtnVisible && 
                <span class="remove-from-cart-button" id={`${name}-remove-from-cart`}>
                    <a>(remove from cart)</a>
                </span>}
        </section>
    )
}

export default MenuItem;