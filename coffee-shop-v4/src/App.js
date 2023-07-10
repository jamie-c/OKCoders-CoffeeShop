import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Layout from './components/Layout';
import Menu from './pages/Menu';
import { useState } from 'react';
import Login from './pages/Login';
import Contact from './components/navbar/Contact';

function App() {

    const [cartVisible, setCartVisible] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

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

  const router = createBrowserRouter([
  	{
        path: '/',
  		element: <Layout 
                    shoppingCart={shoppingCart}
                    addToCart={addToCart}
                    remFromCart={remFromCart} 
                    cartVisible={cartVisible}
                    toggleCartVisibility={toggleCartVisibility}
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                />,
  		children: [
  			{
  				path: '/menu',
  				element: <Menu
                            addToCart={addToCart} 
                            cartVisible={cartVisible} 
                            toggleCartVisibility={toggleCartVisibility} 
                        />,
  			},
  			{
  				path: '/contact',
  				element: <Contact />,
  			},
  		],
  	},
  	{
  		path: '/login',
  		element: <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />,
  	},
  ]);

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
	    	<RouterProvider router={router} />
        </div>
    </ThemeProvider>
  );
}

export default App;
