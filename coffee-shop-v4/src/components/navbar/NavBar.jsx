import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import Cart from "../cart/Cart";

const NavBar = ({ shoppingCart, remFromCart, toggleCartVisibility, cartVisible }) => {

    const [showShadow, setShowShadow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTopVisible = window.scrollY === 0;
            setShowShadow(!isTopVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const mainNavItems = [['menu', '#menu'], ['about', '#about'], ['shop', '#shop'], ['contact', '#contact']];

    return (
        <>
            <nav id="navbar" className={showShadow ? "flex row shadow" : "flex row"}>
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
            {cartVisible && 
            <Cart 
                shoppingCart={shoppingCart} 
                remFromCart={remFromCart} 
                toggleCartVisibility={toggleCartVisibility}
            />}
        </>
    );
};

export default NavBar;