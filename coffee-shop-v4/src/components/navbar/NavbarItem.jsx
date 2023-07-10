import { Button, ListItem, ListItemText } from "@mui/material";
import { Link, useMatch } from "react-router-dom"

const NavbarItem = ({ path, label, handleCloseNavMenu }) => {

    const match = useMatch(path);

    return (
        <ListItem component={Link} to={path} sx={{maxWidth:'fit-content'}}>
            <ListItemText primary={label} sx={{ color:'var(--very-dark-color)', maxWidth:'fit-content', borderBottom: match ? '2px solid var(--very-dark-color)' : 'none' }} />
        </ListItem>
        // <Button
        //     key={label}
        //     onClick={() => handleCloseNavMenu([label, path])}
        //     sx={{ my: 2, color: 'white', fontWeight: '600', display: 'block' }}
        // >
        //     <span style={{color:"var(--very-dark-color)", borderBottom: match ? '2px solid var(--very-dark-color)' : 'none'}} className='nav-link'>{label}</span>
        // </Button>
    );
};

export default NavbarItem;