import CartItem from "./CartItem";

const Cart = () => {
    // const cartTotalPrice;
    
    return (
        <div 
            style={{
                border:'2px solid black',
                borderRadius:6,
                width:320,
                height:'90vh',
                position:'fixed',
                right:5,
                backgroundColor:'var(--light-color)',
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
            >SHOPPING CART<span>X</span>
            </span>
            <div>
                <CartItem />
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
                <span>TOTAL:</span><span id="total">$32</span>
            </div>
        </div>
    );
};

export default Cart;