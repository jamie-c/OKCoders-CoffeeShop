import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddToCartButton from '../AddToCartButton';

export default function MenuItem({ menuItem, cartVisible, toggleCartVisibility, addToCart }) {

    const { id, name, price, img } = menuItem;

    return (
      <Card sx={{ flex: 1, maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
        </CardContent>
        <CardActions sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <AddToCartButton
              addToCart={addToCart}
              menuItem={menuItem}
              cartVisible={cartVisible}
              toggleCartVisibility={toggleCartVisibility} 
            />
        </CardActions>
      </Card>
    );
}