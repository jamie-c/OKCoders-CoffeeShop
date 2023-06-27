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
    <button
        className="add-to-cart-button"
        onClick={() => handleAddToCart(menuItem)}
    >
        add to cart
    </button>
    );
};

export default AddToCartButton;