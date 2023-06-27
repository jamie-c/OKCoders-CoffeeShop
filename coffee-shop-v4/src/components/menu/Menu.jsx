import MenuItem from "./MenuItem";
import { menuCatalog } from "../data/menuCatalog";

const Menu = ({ addToCart, cartVisible, toggleCartVisibility }) => {

return (
      <>
        <h1 style={{color:'var(--dark-color'}}>MENU</h1>
        <div 
            style={{
              display:'flex',
              flexDirection:'row',
              flexWrap:'wrap',
              justifyContent:'center',
              alignItems:'center',
              padding:'15px 15px',
              gap:'15px',
            }}
        >
        {menuCatalog.map(menuItem => (
            <MenuItem 
              menuItem={menuItem}
              addToCart={addToCart}
              cartVisible={cartVisible}
              toggleCartVisibility={toggleCartVisibility}
            />
        ))}
        </div>
      </>
  );
};

export default Menu;