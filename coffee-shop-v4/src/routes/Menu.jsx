import MenuItem from "../components/menu/MenuItem";
import { menuCatalog } from "../components/data/menuCatalog";
import Announcement from "../components/Announcement";
import { Box, Grid, Typography } from "@mui/material";

const Menu = ({ addToCart, cartVisible, toggleCartVisibility }) => {

return (
      <>
        <Typography
          variant="h2" 
          color='default.main'
          p='40px 0'
        >
          ORDER NOW
        </Typography>
        <Announcement />
          <Box 
            pt={2} 
            pb={20} 
            pl={{xs:'0', sm: '10px', md: '20px'}} 
            pr={{xs:'0', sm: '10px', md: '20px'}} 
            sx={{ flexGrow: 0.9, display:'flex', flexDirection:'row', justifyContent:'center', flex:1}}
          >
            <Grid container spacing={{ xs: 1, md: 3 }} wrap='wrap' justifyContent='center' columns={{ xs: 12, sm: 12, md: 12 }}>
              {menuCatalog.map(menuItem => (
                <Grid item xs={12} sm={6} md={4} key={menuItem.id} container justifyContent='center'>
                  <MenuItem 
                    menuItem={menuItem}
                    addToCart={addToCart}
                    cartVisible={cartVisible}
                    toggleCartVisibility={toggleCartVisibility}
                  />
                </Grid>
              ))}
      </Grid>
    </Box>
        
      </>
  );
};

export default Menu;