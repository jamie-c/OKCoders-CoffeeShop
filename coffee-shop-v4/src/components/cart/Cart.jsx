import CartItem from "./CartItem";

const Cart = ({ shoppingCart, remFromCart, addToCart, toggleCartVisibility }) => {

    const cartTotalPrice = shoppingCart.length === 0 ? '0' : 
        shoppingCart.reduce((total, { price, quantity }) => {

            if (price.startsWith('$')) {
                price = Number(price.slice(1)) * quantity;
            }
                return total + price;
        }, 0).toFixed(2);
    
    return (
        <div 
            style={{
                border:'2px solid black',
                borderRadius:6,
                width:320,
                maxHeight:'90vh',
                position:'fixed',
                right:5,
                backgroundColor:'var(--light-color)',
                overflow:'scroll',
                boxShadow:'var(--shadow-elevation-medium)',
                zIndex:10
                }}
        >
            <span
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:'5px 10px'
                }}  
            >
                SHOPPING CART
                <span 
                    style={{cursor:'pointer'}}
                    onClick={toggleCartVisibility}
                >
                    X
                </span>
            </span>
            <div
                style={{
                    minHeight:'60px',
                    paddingTop:'10px'
                }}
            >
                {
                    shoppingCart.length === 0 ? 'Shopping Cart is Empty' :
                    shoppingCart.map((menuItem) => {

                        return (
                            <CartItem menuItem={menuItem} addToCart={addToCart} remFromCart={remFromCart} />
                        )
                    })
                }
            </div>
            <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    padding:'5px 10px',
                    borderTop:'2px solid black', 
                }}
            >
                <span>TOTAL:</span><span id="total">${cartTotalPrice}</span>
            </div>
        </div>
    );
};

export default Cart;