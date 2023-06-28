import { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import NavBar from './components/navbar/NavBar';

function App() {

  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
      setCartVisible(!cartVisible);
  };

  const [shoppingCart, setShoppingCart] = useState([]);

  const addToCart = (menuItem) => {

    const existingItem = shoppingCart.find(item => item.name === menuItem.name);

    if (existingItem) {
      const updatedItems = shoppingCart.map(item =>
        item.name === menuItem.name ? { ...item, quantity: item.quantity + 1 } : item
      );
      setShoppingCart(updatedItems);
    } else {
      setShoppingCart([...shoppingCart, { ...menuItem, quantity: 1 }]);
    }
  };

  const remFromCart = (menuItem) => {

    const existingItem = shoppingCart.find(item => item.name === menuItem.name);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedItems = shoppingCart.filter(item => item.name !== menuItem.name);
        setShoppingCart(updatedItems);
      } else {
        const updatedItems = shoppingCart.map(item =>
          item.name === menuItem.name ? { ...item, quantity: item.quantity - 1 } : item
        );
        setShoppingCart(updatedItems);
      }
    }
  };

  return (
    <div className="App">
      <NavBar 
        shoppingCart={shoppingCart}
        addToCart={addToCart}
        remFromCart={remFromCart} 
        cartVisible={cartVisible}
        toggleCartVisibility={toggleCartVisibility}
      />
      <Menu 
        addToCart={addToCart} 
        cartVisible={cartVisible} 
        toggleCartVisibility={toggleCartVisibility} 
      />
    </div>
  );
}

export default App;
