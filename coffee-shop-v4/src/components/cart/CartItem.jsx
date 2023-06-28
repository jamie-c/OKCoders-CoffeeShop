import TextField from '@mui/material/TextField';

const CartItem = ({ menuItem, remFromCart, addToCart }) => {

    const { id, img, name, price, quantity } = menuItem;

    const handleRemFromCart = (item) => {
        remFromCart(item)
    }

    const handleChangeQuantity = (val) => {
        if (val > quantity) {
            addToCart(menuItem);
        }
        if (val < quantity) {
            remFromCart(menuItem);
        }
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
                padding:'25px 10px'
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
                        height:'25px',
                        width:'25px',
                        objectFit:'cover'
                    }}
                />
                {name}
                <TextField 
                    hiddenLabel
                    label='Quantity'
                    type='number'
                    value={quantity}
                    onChange={e => handleChangeQuantity(e.target.value)}
                    size='small'
                    sx={{
                        borderColor:'var(--very-dark-color)',
                        maxWidth:'5rem'
                    }}
                />
                {/* <span
                    onClick={() => handleRemFromCart(menuItem)}
                    style={{
                        color:'gray',
                        fontSize:'0.7rem',
                        alignSelf:'center',
                        cursor:'pointer'
                    }}
                >
                    remove
                </span> */}
            </span>
            <span>
                {(price.slice(1) * quantity).toFixed(2)}
            </span>
        </div>
    )
}

export default CartItem;