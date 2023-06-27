const CartItem = ({ menuItem, remFromCart }) => {

    const { id, img, name, price, quantity } = menuItem;

    const handleRemFromCart = (item) => {
        remFromCart(item)
    }

    return (
        <div 
            key={id}
            style={{
                height:30,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                padding:'5px 10px'
            }}
        >
            <span
                style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    gap:10
                }}
            >
                <img 
                    src={img} 
                    alt="pic" 
                    style={{
                        height:'25px'
                    }}
                />
                {`${name} (${quantity})`}
                <span
                    onClick={() => handleRemFromCart(menuItem)}
                    style={{
                        color:'gray',
                        fontSize:'0.7rem',
                        alignSelf:'center',
                        cursor:'pointer'
                    }}
                >
                    remove
                </span>
            </span>
            <span>
                {(price.slice(1) * quantity).toFixed(2)}
            </span>
        </div>
    )
}

export default CartItem;