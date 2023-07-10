import './App.css';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import Menu from './routes/Menu';
import { useState } from 'react';
import Login from './routes/Login';
import Contact from './routes/Contact';
import Navbar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';

function App() {

    const [cartVisible, setCartVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [shoppingCart, setShoppingCart] = useState([]);


    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };


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

    const theme = createTheme({
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true,
          },
        },
        MuiCssBaseline: {
        }
      },
      status: {
        danger: '#e53e3e',
      },
      palette: {
        primary: {
            main: '#262A56',
            darker: '#053e85',
        },
        secondary: {
            main: '#e5e5cb'
        },
        neutral: {
          main: '#64748B',
          contrastText: '#fff',
        },
      },
    });

  return (
    <ThemeProvider theme={theme}>
        <div className="App">
            <CssBaseline />
            <Navbar 
              shoppingCart={shoppingCart} 
              toggleCartVisibility={toggleCartVisibility} 
              cartVisible={cartVisible}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
            {cartVisible && 
              <Cart
                  shoppingCart={shoppingCart} 
                  remFromCart={remFromCart} 
                  addToCart={addToCart}
              />}
            <Routes>
              <Route
                path='/'
                element={
                  <Menu
                    addToCart={addToCart} 
                    cartVisible={cartVisible} 
                    toggleCartVisibility={toggleCartVisibility}
                    />}
                  />
              <Route 
                path='/menu' 
                element={
                  <Menu
                    addToCart={addToCart} 
                    cartVisible={cartVisible} 
                    toggleCartVisibility={toggleCartVisibility} 
                  />} 
              />
              <Route 
                path='/login'
                element={
                  <Login
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                  />}
                 />
              <Route
                path='/contact'
                element={<Contact />}
              />
            </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;
