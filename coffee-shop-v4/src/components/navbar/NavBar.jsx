import { useState } from "react";
import NavItem from "./NavItem";
import Cart from "../Cart";

const NavBar = () => {

    const [cartVisible, setCartVisible] = useState(false);

    const toggleCartVisibility = () => {
        setCartVisible(!cartVisible);
        console.log('clicked cart!');
    };

    const mainNavItems = [['about', '#about'], ['shop', '#shop'], ['contact', '#contact'], ['cart', '#cart']];

    return (
        <>
            <nav id="navbar" class="flex row">
                <span class="logo"><a href="./index.html">Drip Coffee</a></span>
                <span class="links flex row">
                    {mainNavItems.map(([title, url]) => (
                        <NavItem url={url} title={title}/>
                    ))}
                    <a id="login"><i class="login-user-icon fa-regular fa-user"></i><span id="login-txt"> login</span></a>
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
            {cartVisible && <Cart />}
        </>
    );
};

export default NavBar;