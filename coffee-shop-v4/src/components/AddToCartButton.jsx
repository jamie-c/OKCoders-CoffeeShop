const AddToCartButton = ({ addToCart, menuItem }) => {

    const handleAddToCart = (item) => {
        addToCart(item);
    }

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