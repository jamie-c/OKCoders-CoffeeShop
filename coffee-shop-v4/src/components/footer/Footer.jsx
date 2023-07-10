import { List, ListItem, ListItemText } from "@mui/material";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import NavItem from "../navbar/NavItem";
import FooterSubNav from "./FooterSubNav";

const subNav = [['Home', '/'], ['Menu', '/menu'], ['My Accout', '#my-account'], ['About', '/aobut'], ['Contact', '/contact']]

const Footer = () => {
    return (
<footer class="flex column">
    <span class="footer flex row">
    <section class="footer-section">
        <h2>Navigation</h2>
        <List>
            {subNav.map(([title, relPath]) => (
                <FooterSubNav path={relPath} label={title} />
            ))}
			{/* <NavItem label="Shipping & Returns" path="#shipping" />
            <NavItem label="My Account" path='#my-account'/>
            <NavItem label="About Us" path="/about" />
            <NavItem label="Connect" path="/contact" /> */}
		</List>
        {/* <div class="sub-nav flex column">
            <a href="/">Home</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">My Account</a>
            <a href="#">About Us</a>
            <a href="/contact">Connect</a>
        </div> */}
    </section>
    <section class="footer-section">
        <h2>Info</h2>
        <div class="Address">
            <span>
                <h2>Flaming Lips Alley</h2>
                <p>333 Flaming Lips Alley<br />Oklahoma City, OK 73104</p>
            </span>
            <span>
                <p>HOURS</p>
                <p>Monday - Friday 7 am - 4 pm</p>
                <p>Saturday 8 am - 4 pm</p>
                <p>Sunday 8 am - 2 pm</p>
            </span>
            <span>
                <p>PHONE</p>
                <p>(405) 555-5671</p>
            </span>
        </div>
    </section>
    <section class="footer-section">
        <h2>Connect</h2>
        <div class="social-icons flex row">
            <a href="mailto:coffee@jpconway.com?subject=Re: Your coffee shop project"><i class="fa-solid fa-envelope"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/jamie-c"><i class="fa-brands fa-github"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jamieconway/"><i class="fa-brands fa-linkedin"></i></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/jamie_c"><i class="fa-brands fa-square-instagram"></i></a>
        </div>
    </section>
    </span>
    <span class="bottom-of-footer-text">
        <p>This <em>mock</em> site is built by <a rel="noopener noreferrer" target="_blank"href="https://www.jpconway.com">Jamie Conway</a> - member of <a rel="noopener noreferrer" target="_blank" href="https://okcoders.com">OKCoders</a> 2023 Cohort - for the sole purpose of exercising lessons learned.</p>
    </span>
   </footer>
);
};

export default Footer;