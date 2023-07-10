import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, Paper, Typography } from '@mui/material';
import CartItem from './CartItem';

export default function Cart({ shoppingCart, remFromCart, addToCart }) {
    const cartTotalPrice = shoppingCart.length === 0 ? '0' : 
        shoppingCart.reduce((total, { price, quantity }) => {

            if (price.startsWith('$')) {
                price = Number(price.slice(1)) * quantity;
            }
                return total + price;
        }, 0).toFixed(2);

  return (
    <Paper 
        elevation={6}
        sx={{
            maxWidth: 400,
            minWidth: 300,
            border:'2px solid var(--very-dark-color)',
            bgcolor:'var(--light-color)',
            height:'calc(100vh - 100px)',
            position:'fixed',
            right:'10px',
            top:'90px',
            zIndex:10,
        }}
    >
        <Typography
            variant='h5'
            >SHOPPING CART</Typography>
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        paddingBottom: 0,
      }}
    >
        {
            shoppingCart.length === 0 ? 'Shopping Cart is Empty' :
            shoppingCart.map((menuItem, i, a) => {
                let lastItem = false;
                if (a.length - 1 - i === 0) {
                    lastItem = true;
                } 
                return (
                    <CartItem menuItem={menuItem} addToCart={addToCart} remFromCart={remFromCart} lastItem={lastItem} />
                )
            })
        }
        <Divider sx={{borderBottomWidth:'2px', borderColor:'var(--very-dark-color)'}}/>
        <ListItem>
            <ListItemText primary={'SUBTOTAL'} /> 
            <ListItemText primary={`$${cartTotalPrice}`} sx={{textAlign:'right'}}/> 
        </ListItem>
        <ListItem sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Button variant='contained' disabled={!shoppingCart.length} >CHECKOUT</Button>
        </ListItem>
    </List>
    </Paper>
  );
}