const header = document.getElementsByTagName('header');

header[0].style.backgroundImage = "url(./images/juli-kosolapova-a9JHqe81qMg-unsplash.jpg)";
header[0].style.backgroundPositionY = 'top';

// define element that holds nav page links
const navLinks = document.getElementsByClassName('links');

// define menu object with names, prices (in cents - don't deal with fractions here!), any relevant info
const menuItems = {
    espresso: {
        id: "espresso",
        name: "Espresso",
        price: 400,
        button: "espresso-btn",
        headerId: "espresso-txt",
        category: "hot-drinks",
        imgUrl: "caglar-oskay-44DdVmC2gy0-unsplash.jpg",
        quantity: 0
    },
    americano: {
        id: "americano",
        name: "Americano",
        price: 500,
        button: "americano-btn",
        headerId: "americano-txt",
        category: "hot-drinks",
        imgUrl: "jakub-dziubak-XtUd5SiX464-unsplash.jpg",
        quantity: 0
    },
    coldBrew: {
        id: "coldBrew",
        name: "Cold Brew",
        price: 700,
        button: "cold-brew-btn",
        headerId: "cold-brew-txt",
        category: "cold-drinks",
        imgUrl: "daniel-hooper-w2wsyjSaHns-unsplash.jpg",
        quantity: 0
    },
    icedTea: {
        id: "icedTea",
        name: "Iced Tea",
        price: 600,
        button: "iced-tea-btn",
        headerId: "iced-tea-txt",
        category: "cold-drinks",
        imgUrl: "wade-austin-ellis-yN7prWLW7xg-unsplash.jpg",
        quantity: 0
    },
    hummusSandwich: {
        id: "hummusSandwich",
        name: "Hummus Sandwich",
        price: 900,
        button: "hummus-sandwich-btn",
        headerId: "hummus-sandwich-txt",
        category: "sandwiches",
        imgUrl: "",
        quantity: 0
    },
    bltSandwich: {
        id: "bltSandwich",
        name: "BLT Sandwich",
        price: 800,
        button: "blt-sandwich-btn",
        headerId: "blt-sandwich-txt",
        category: "sandwiches",
        imgUrl: "",
        quantity: 0
    },
    matchaLatte: {
        id: "matchaLatte",
        name: "Matcha Latte",
        price: 700,
        button: "matcha-latte-btn",
        headerId: "matcha-latte-txt",
        category: "hot-drinks",
        imgUrl: "ann-74NChp1cn5I-unsplash.jpg",
        quantity: 0
    }
}

// Define function to build menu item section
const createMenuItem = (itemName) => {
    const fragment = new DocumentFragment();
    const section = document.createElement('section');
    const image = document.createElement('img');
    const h = document.createElement('h3');
    const button = document.createElement('button');
    section.setAttribute('class', 'menu-item');
    image.setAttribute('src', './images/' + menuItems[itemName]['imgUrl']);
    image.setAttribute('alt', menuItems[itemName]['name']);
    h.setAttribute('id', menuItems[itemName]['headerId']);
    button.setAttribute('class', 'add-to-cart-button');
    button.setAttribute('id', menuItems[itemName]['button']);
    button.textContent = 'add to cart';
    h.textContent = menuItems[itemName]['name'];
    section.append(image);
    section.append(h);
    section.append(button);
    fragment.append(section);
    return fragment;
}

// Create page content from menuItems object and add event listeners to add to cart on click
for (let item of Object.keys(menuItems)) {
    const shopMenuSection = document.getElementById(menuItems[item]['category']);
    shopMenuSection.append(createMenuItem(item));
    document.getElementById(menuItems[item]['button']).addEventListener('click', () => addItemToCart(item));
}

// define elements that are the add to cart button -- returns list
const addToCartButton = document.getElementsByClassName('add-to-cart-button');


// define global scope variables to append cart info to navbar 
let shoppingCartCountElement;
let shoppingCartDollarsElement;

// define list to hold shopping cart items
const shoppingCart = [];
let shoppingCartTotal = 0;

// define function to add items to cart
let addItemToCart = (itemName) => {
    // if adding first item to cart, add cart icon to the navbar
    if (shoppingCart.length == 0) {
        navLinks[0].append(addCartToNavBar());
        shoppingCartCountElement = document.getElementById('cart-count');
        shoppingCartDollarsElement = document.getElementById('cart-dollars');
    };
    addItem(itemName);
}

// define function to remove item from cart, then check if cart is empty (remove icon if so), check if item is in cart (remove 'remove from cart' text if so)
let remItemFromCart = (itemName) => {
    // if removing last item from cart, remove cart icon from navbar
    remItem(itemName);
    if (shoppingCart.length == 0) {
        document.getElementById('cart-info').remove();
    }
    if (!shoppingCart.includes(itemName)) {
        document.getElementById(itemName + '-remove-from-cart').remove();
    }
}

// add item to the shoppingCart list, update cart count and dollar elements with correct values, add 'remove from cart' text if not already in shopping cart
let addItem = (itemName) => {
    if (!shoppingCart.includes(itemName)) {
        addRemoveFromCartButton(itemName);
    }
    shoppingCart.push(itemName);
    updateCartCount();
    updateCartTotal(itemName); 
}

// define function to update cart total in dollars
let updateCartTotal = (itemName, op='add') => {
    if (op === 'add') {
        shoppingCartTotal += menuItems[itemName]['price'];
    } else if (op === 'rem') {
        shoppingCartTotal -= menuItems[itemName]['price'];
    };
    shoppingCartDollarsElement.textContent = " ($" + shoppingCartTotal / 100 + ")";
}

// define function to update the cart text with the number of items
let updateCartCount = () => {
    if (shoppingCart.length == 1) {
        shoppingCartCountElement.textContent = " " + shoppingCart.length + " item";
    } else {
        shoppingCartCountElement.textContent = " " + shoppingCart.length + " items";
    }
}

// define function to add remove from cart button
let remItem = (itemName) => {
    if (shoppingCart.includes(itemName)) {
        const itemIndex = shoppingCart.indexOf(itemName);
        shoppingCart.splice(itemIndex, 1);
        updateCartCount();
        updateCartTotal(itemName, 'rem');
    }
}

// build shopping cart document fragment to be appended to navbar at appropriate time (when something is in the cart)
const addCartToNavBar = () => {
    const fragment = new DocumentFragment();
    const a = document.createElement('a');
    const i = document.createElement('i');
    const sDollars = document.createElement('span');
    const sCount = document.createElement('span');
    sDollars.setAttribute('id', 'cart-dollars');
    sCount.setAttribute('id', 'cart-count');
    i.setAttribute('class', 'fa-solid fa-cart-shopping');
    a.append(i);
    a.append(sCount);
    a.append(sDollars);
    fragment.append(a);
    a.setAttribute('id', 'cart-info')
    return fragment;
}

// build remove from cart button document fragment to be appended next to add to cart button when item is in the cart
const createRemoveFromCartButton = (menuItem) => {
    const remText = menuItem + "-remove-from-cart";
    const fragment = new DocumentFragment();
    const s = document.createElement('span');
    const a = document.createElement('a');
    s.setAttribute('class', 'remove-from-cart-button');
    s.setAttribute('id', remText)
    a.textContent = '(remove from cart)';
    s.append(a);
    fragment.append(s);
    return fragment;
}

// define function to add the remove from cart text to the page
let addRemoveFromCartButton = (itemName) => {
    document.getElementById(menuItems[itemName]['button']).parentElement.append(createRemoveFromCartButton(itemName));
    document.getElementById(itemName + '-remove-from-cart').addEventListener('click', () => remItemFromCart(itemName));
}
