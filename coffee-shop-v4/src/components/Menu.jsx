import AddToCartButton from "./AddToCartButton";
// import { coffeeMenuCatalog } from "./menuCatalog";
import { menuCatalog } from "./menuCatalog";
// import MenuItem from "./MenuItem";

const Menu = ({ addToCart }) => {

    // const categories = coffeeMenuCatalog.reduce((acc, item) => {
    //     acc[item.category] = acc[item.category] || [];
    //     acc[item.category].push(item);
    //     return acc;
    // }, {});
    
    // console.log({categories})

return (
    // <div>
    //   {Object.entries(categories).map(([category, items]) => (
    //     <div key={category}>
    //       <h2>{category}</h2>
    //         {items.map(({ id, name, imgUrl }) => {
    //             console.log(name)
    //             return (
    //             <MenuItem
    //                 id={id}
    //                 name={name}
    //                 imgUrl={imgUrl}
    //             />
    //             )
    //         })}
    //     </div>
    //   ))}
      <>
      <h1>MENU</h1>
      <div 
          style={{
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
            padding:'15px 15px',
            gap:'15px',
          }}
      >
      {menuCatalog.map(menuItem => (
          <section
            key={menuItem.id}
            style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              gap:'10px'
            }}
          >
            <h2>{menuItem.name}</h2>
            <div>{menuItem.price}</div>
            <img src={menuItem.img} alt="menu item"/>
            <AddToCartButton addToCart={addToCart} menuItem={menuItem} />
          </section>
      ))}
      </div>
      </>
    // </div>
  );
    // return (

    //     // {categories.map(category => (
    //     //     <h2>{category}</h2>

    //     // ))}

    //     <main id="shop-menu">
    //         {
    //         categories.map(category => {

    //             {console.log(category)}

    //             return (
    //             <h2>{category.key()}</h2>
    //             category.map(( {id, name, imgUrl }) => {
    //                 return (
    //                     <MenuItem 
    //                     id={id}
    //                     name={name}
    //                     imgUrl={imgUrl}
    //                 />
    //                 )
    //             }))
    //         })
    //         }
    //     </main>
    // );
};

export default Menu;