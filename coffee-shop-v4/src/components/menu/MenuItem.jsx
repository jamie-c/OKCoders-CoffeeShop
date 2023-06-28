import zIndex from "@mui/material/styles/zIndex";
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
              gap:'10px',
              marginBottom:50
            }}
          >
            <div
              style={{
                width:400,
                height:400,
                position:'relative',
                overflow:'hidden',
              }}
            >
              <h2
                style={{
                  position: 'absolute', // Added position property
                  top: 100, // Positioned at the top
                  left: 0, // Positioned at the left
                  color: 'white', // Added text color
                  margin: 0, // Remove default margin
                  width: '100%', // Full width
                  fontSize:'3.2rem',
                  zIndex:9
                }}
              >{name}</h2>
              <div
                style={{
                  position: 'absolute', // Added position property
                  bottom: 0, // Positioned at the bottom
                  width:'100%',
                  backgroundColor: 'var(--dark-color)', // Added background color with opacity
                  color: 'white', // Added text color
                  padding: '8px 0', // Added padding
                  margin: 0, // Remove default margin
                  zIndex:9
                }}
              >{price}</div>
              <div
                style={{
                  width:'100%',
                  height:'100%',
                  backgroundColor:'var(--dark-color)',
                  opacity:'0.7',
                  position:'absolute',
                  top:0,
                  left:0,
                  zIndex:8
                }}
              ></div>
              <img
                src={img}
                alt="menu item"
                style={{
                  width:'100%',
                  height:'100%',
                  objectFit:'cover',
                }}
              />
            </div>
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