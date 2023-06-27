import AddToCartButton from "../AddToCartButton";

const MenuItem = ({ menuItem, cartVisible, toggleCartVisibility, addToCart }) => {

    const { id, name, price, img } = menuItem;

    return ( 
        <section
            key={id}
            style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              gap:'10px'
            }}
          >
            <h2>{name}</h2>
            <div>{price}</div>
            <img
              src={img}
              alt="menu item"
              style={{
                width:400,
                height:400,
                objectFit:'cover'
              }}
            />
            <AddToCartButton
              addToCart={addToCart}
              menuItem={menuItem}
              cartVisible={cartVisible}
              toggleCartVisibility={toggleCartVisibility} 
            />
          </section>
    )
}

export default MenuItem;