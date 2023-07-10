import Navbar from "./navbar/Navbar";
import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";

const Layout = ({ shoppingCart, addToCart, remFromCart, cartVisible, toggleCartVisibility, loggedIn }) => {

    // if (loggedIn === false) {
	// 	return <Navigate to="/login" />;
	// }

    return (
    <Stack height='100%'>
        <Navbar 
            shoppingCart={shoppingCart}
            addToCart={addToCart}
            remFromCart={remFromCart} 
            cartVisible={cartVisible}
            toggleCartVisibility={toggleCartVisibility}
        />
        {cartVisible && 
        <Cart 
            shoppingCart={shoppingCart} 
            remFromCart={remFromCart} 
            addToCart={addToCart}
        />}
        <Box height='100%'>
            <Outlet />
        </Box>
        <Footer />
    </Stack>
    );
};
export default Layout;