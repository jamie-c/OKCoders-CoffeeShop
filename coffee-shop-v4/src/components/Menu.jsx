import AddToCartButton from "./AddToCartButton";
import MenuCatalog from "./MenuCatalog";
import MenuItem from "./MenuItem";

const Menu = () => {

    const categories = MenuCatalog.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});
    
    console.log({categories})

return (
    <div>
      {Object.entries(categories).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
            {items.map(({ id, name, imgUrl }) => {
                console.log(name)
                return (
                <MenuItem
                    id={id}
                    name={name}
                    imgUrl={imgUrl}
                />
                )
            })}
        </div>
      ))}
    </div>
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