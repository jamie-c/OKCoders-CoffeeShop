const NavItem = props => {
    return <a key={props.title} href={props.url}>{props.title}</a>
};

export default NavItem;