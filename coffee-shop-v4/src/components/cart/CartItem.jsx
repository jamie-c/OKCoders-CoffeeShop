import { Avatar, Divider, Grid, ListItem, ListItemAvatar, ListItemText, Stack, TextField } from "@mui/material";

const CartItem = ({ menuItem, remFromCart, addToCart, lastItem }) => {

    const { id, img, name, price, quantity } = menuItem;

    const handleChangeQuantity = (val) => {
        if (val > quantity) {
            addToCart(menuItem);
        }
        if (val < quantity) {
            remFromCart(menuItem);
        }
    }

    return <>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <img 
                        src={img} 
                        alt="pic" 
                        style={{
                            height:'100%',
                            width:'100%',
                            objectFit:'cover'
                        }} 
                    />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={`${price} ea.`} sx={{maxWidth:'fit-content'}} />
            <Grid container spacing={2} columns={9} justifyContent='flex-end' flex={2} >
                <Grid item xs={6} display='flex' justifyContent='flex-end'>
                    <TextField
                        hiddenLabel
                        label='Quantity'
                        type='number'
                        value={quantity}
                        onChange={e => handleChangeQuantity(e.target.value)}
                        size='small'
                        sx={{
                            borderColor:'var(--very-dark-color)',
                            maxWidth:'5rem'
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <ListItemText primary={'$' + (price.slice(1) * quantity).toFixed(2)} sx={{maxWidth:'fit-content'}} />    
                </Grid>
            </Grid>
        </ListItem>
        {!lastItem && <Divider variant="inset" component="li" />}
    </>
};

export default CartItem;