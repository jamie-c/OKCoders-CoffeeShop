import { useState } from "react";
import NavItem from "./NavItem";
import Cart from "../Cart";

const NavBar = ({ shoppingCart, remFromCart }) => {

    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
    };

    const mainNavItems = [['about', '#about'], ['shop', '#shop'], ['contact', '#contact']];

    return (
        <>
            <nav id="navbar" className="flex row">
                <span key="logo" className="logo"><a href="./index.html">Drip Coffee</a></span>
                <span key="links" className="links flex row">
                    {mainNavItems.map(([title, url]) => (
                        <NavItem url={url} title={title}/>
                    ))}
                    <a key="login"><i className="login-user-icon fa-regular fa-user"></i><span id="login-txt"> login</span></a>
                    <span 
                        onClick={toggleCartVisibility}
                        style={{cursor:'pointer'}}><i 
                        ></i>
                        <span
                            style={{
                                color:'var(--dark-color'
                            }}
                        >cart</span>
                    </span>
                </span>
            </nav>
            {cartVisible && <Cart shoppingCart={shoppingCart} remFromCart={remFromCart} />}
        </>
    );
};

export default NavBar;