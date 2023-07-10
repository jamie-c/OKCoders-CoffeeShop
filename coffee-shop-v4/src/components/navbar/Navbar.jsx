import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  Paper,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarItem from './NavbarItem';
import { useMatch, useNavigate, Link } from 'react-router-dom';
import { Login } from '@mui/icons-material';

const Navbar = ({ shoppingCart, toggleCartVisibility, cartVisible, loggedIn, setLoggedIn }) => {

    const pages = [['Menu', '/menu'], ['Contact', '/contact'], ];

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);

    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        navigate(page[1])
    };

    const shoppingCartTotalItems = shoppingCart.length > 0 ? 
        shoppingCart.reduce((total, {quantity}) => total + quantity, 0)
    :   0;

    const handleLogOut = () => {
        setLoggedIn(false);
    }

    const LoginButton = () => {
        
        const path = '/login';
        const match = useMatch(path)
        return (
            <ListItem component={Link} to={path} sx={{maxWidth:'fit-content'}} onClick={handleLogOut}>
                <ListItemText primary={loggedIn ? 'Logout' : 'Login'} sx={{ color:'var(--very-dark-color)', maxWidth:'fit-content', borderBottom: match ? '2px solid var(--very-dark-color)' : 'none' }} />
            </ListItem>
        );
    };

  return (
    <>
    <AppBar color='secondary' position="sticky" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            id="home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Drip Coffee
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page[0]} onClick={() => handleCloseNavMenu(page)}>
                  <Typography color="var(--very-dark-color)" textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
                <LoginButton />
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Drip Coffee
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <NavbarItem path={page[1]} label={page[0]} handleCloseNavMenu={handleCloseNavMenu} />
            ))}
            <LoginButton />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={cartVisible ? "Close cart" : "Open cart"}>
              <IconButton onClick={toggleCartVisibility} sx={{ p: 0 }}>
                <Paper 
                    elevation='0'
                    variant='outlined' 
                    alt="Cart"
                    sx={{
                        backgroundColor:'var(--very-dark-color)',
                        color:'var(--light-color)',
                        p:'8px 15px',
                        display:'flex',
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        gap:1,
                        fontSize:'18px'
                    }}
                >
                    <ShoppingCartIcon /> {shoppingCartTotalItems > 0 ? `(${shoppingCartTotalItems})` : null}
                </Paper>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}
export default Navbar;