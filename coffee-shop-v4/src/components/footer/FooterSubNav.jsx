import { ListItem, ListItemText } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';

const FooterSubNav = ({ path, label }) => {
	const match = useMatch(path);

	return (
		<ListItem component={Link} to={path}>
            <ListItemText primary={label} sx={{ color:'var(--light-color)', maxWidth:'fit-content', borderBottom: match ? '2px solid var(--light-color)' : 'none' }} />
        </ListItem>
	);
};

export default FooterSubNav;
