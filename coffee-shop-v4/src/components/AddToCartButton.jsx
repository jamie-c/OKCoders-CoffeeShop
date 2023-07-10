import { Button } from "@mui/material";

const AddToCartButton = ({ addToCart, menuItem, cartVisible, toggleCartVisibility }) => {

    const brieflyShowCart = () => {
        if (cartVisible === false) {
            toggleCartVisibility();
            // TODO set timeout then toggleCartVisibility() again
        }
    };

    const handleAddToCart = (item) => {
        addToCart(item);
        brieflyShowCart();
    };

    return (
    <Button
        color="primary"
        variant="contained"
        className="add-to-cart-button"
        onClick={() => handleAddToCart(menuItem)}
    >
        add to cart
    </Button>
    );
};

export default AddToCartButton;