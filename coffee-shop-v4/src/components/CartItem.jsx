const CartItem = () => {
    return (
        <div 
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
                    src="./images/ann-74NChp1cn5I-unsplash-square.jpg" 
                    alt="Matcha Latte" 
                    style={{
                        height:'25px'
                    }}
                />
                Matcha Latte
            </span>
            <span>
                $7
            </span>
        </div>
    )
}

export default CartItem;