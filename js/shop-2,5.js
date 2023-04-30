const header = document.getElementsByTagName('header');

header[0].style.backgroundImage = "url(../images/juli-kosolapova-a9JHqe81qMg-unsplash.jpg)";
header[0].style.backgroundPositionY = 'top';

// define element that holds nav page links
const navLinks = document.getElementsByClassName('links');

// define element that holds cart li items
const cartLiElement = document.getElementById('cart-list-items');

// define element that holds total amount
const cartTotal = document.getElementById('total');

// define checkbox element that shows/hides shopping cart
const cartToggle = document.getElementById('cartToggle');

// define cart element
const shopCartElement = document.getElementById('shopping-cart');

// define cart-info element
const cartInfo = document.getElementById('cart-info');

// define cart-close button
const cartClose = document.getElementById('cart-close');
cartClose.addEventListener('click', () => openClose());

// define function to open close cart
const openClose = () => {
    if (cartToggle.checked === false) {
        cartToggle.checked = true;
        shopCartElement.style.right = '0px';
        document.getElementsByTagName('body')[0].classList.add('remove-scroll');
    } else {
        cartToggle.checked = false;
        shopCartElement.style.right = '-400px';
        document.getElementsByTagName('body')[0].classList.remove('remove-scroll');
    }
}

// define menu object with names, prices (in cents - don't deal with fractions here!), any relevant info
const menuItems = [
    {
        id: "espresso",
        name: "Espresso",
        price: 400,
        description: "Double shot.",
        button: "espresso-btn",
        headerId: "espresso-txt",
        category: "hot-drinks",
        imgUrl: "caglar-oskay-44DdVmC2gy0-unsplash-square.jpg",
        quantity: 0
    },
    {
        id: "americano",
        name: "Americano",
        price: 500,
        description: "Esspresso with hot water.",
        button: "americano-btn",
        headerId: "americano-txt",
        category: "hot-drinks",
        imgUrl: "jakub-dziubak-XtUd5SiX464-unsplash-square.jpg",
        quantity: 0
    },
    {
        id: "coldBrew",
        name: "Cold Brew",
        price: 700,
        description: "Brewed without heat.",
        button: "cold-brew-btn",
        headerId: "cold-brew-txt",
        category: "cold-drinks",
        imgUrl: "daniel-hooper-w2wsyjSaHns-unsplash-square.jpg",
        quantity: 0
    },
    {
        id: "icedTea",
        name: "Iced Tea",
        price: 600,
        description: "Darjeeling. Brewed hot, shaken with ice.",
        button: "iced-tea-btn",
        headerId: "iced-tea-txt",
        category: "cold-drinks",
        imgUrl: "wade-austin-ellis-yN7prWLW7xg-unsplash-square.jpg",
        quantity: 0
    },
    {
        id: "hummusSandwich",
        name: "Hummus Sandwich",
        price: 900,
        description: "Hummus, carrots, lettuce, avocado, pepitas.",
        button: "hummus-sandwich-btn",
        headerId: "hummus-sandwich-txt",
        category: "sandwiches",
        imgUrl: "",
        quantity: 0
    },
    {
        id: "bltSandwich",
        name: "BLT Sandwich",
        price: 800,
        description: "Eggplant bacon, lettuce, tomato, french mustard.",
        button: "blt-sandwich-btn",
        headerId: "blt-sandwich-txt",
        category: "sandwiches",
        imgUrl: "",
        quantity: 0
    },
    {
        id: "matchaLatte",
        name: "Matcha Latte",
        price: 700,
        description: "High grade matcha blended with brazil nut milk and honey",
        button: "matcha-latte-btn",
        headerId: "matcha-latte-txt",
        category: "hot-drinks",
        imgUrl: "ann-74NChp1cn5I-unsplash-square.jpg",
        quantity: 0
    }
]

const getMenuItem = (itemName) => {
    return menuItems.filter(element => element.name === itemName)[0];
}

// Define function to build menu item section
const createMenuItem = (item) => {
    const fragment = new DocumentFragment();
    const section = document.createElement('section');
    const image = document.createElement('img');
    const h = document.createElement('h3');
    const button = document.createElement('button');
    section.setAttribute('class', 'menu-item');
    image.setAttribute('src', './images/' + item.imgUrl);
    image.setAttribute('alt', item.name);
    h.setAttribute('id', item.headerId);
    button.setAttribute('class', 'add-to-cart-button');
    button.setAttribute('id', item.button);
    button.textContent = 'add to cart';
    h.textContent = item.name;
    section.append(image);
    section.append(h);
    section.append(button);
    fragment.append(section);
    return fragment;
}

// Function to add item to cart dropdown
const createCartLi = (itemName) => {
    let item = getMenuItem(itemName);
    const fragment = document.createDocumentFragment();
    const li = document.createElement('li');
    const spL = document.createElement('span');
    const spR = document.createElement('span');
    const prodImg = document.createElement('img');
    li.setAttribute('class', 'indent');
    li.setAttribute('id', itemName + '-cart-list-item');
    spR.setAttribute('id', itemName + '-total');
    prodImg.setAttribute('src', '../images/' + item.imgUrl);
    prodImg.setAttribute('alt', itemName + ' image');
    spL.append(prodImg);
    spL.append(itemName);
    li.append(spL);
    li.append(spR);
    fragment.append(li);
    return fragment;
}

// Create page content from menuItems object and add event listeners to add to cart on click
const displayMenuItems = () => {
    menuItems.forEach(element => {
        const shopMenuSection = document.getElementById(element.category);
        shopMenuSection.append(createMenuItem(element))
        document.getElementById(element.button).addEventListener('click', () => addItemToCart(element.name));
    });
}

// define elements that are the add to cart button -- returns list
const addToCartButton = document.getElementsByClassName('add-to-cart-button');


// define global scope variables to append cart info to navbar 
let shoppingCartCountElement;
let shoppingCartDollarsElement;

// define list to hold shopping cart items
const shoppingCart = [];
let shoppingCartTotal = 0;

// define function for menu icon animation
const animateMenuButton = () => {
    hamRotate[0].classList.add('active');
    setTimeout(() => { hamRotate[0].classList.remove('active'); }, 250);
}

// define function to add items to cart
let addItemToCart = (itemName) => {
    // if adding first item to cart, add cart icon to the navbar
    if (shoppingCart.length == 0) {
        navLinks[0].append(addCartToNavBar());
        document.getElementById('cart-info').addEventListener('click', () => {
           openClose(); 
        });
        shoppingCartCountElement = document.getElementById('cart-count');
        shoppingCartDollarsElement = document.getElementById('cart-dollars');
    };
    addItem(itemName);
    animateMenuButton();
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
        document.getElementById(itemName + '-cart-list-item').remove();
    }
    animateMenuButton();
}

// add item to the shoppingCart list, update cart count and dollar elements with correct values, add 'remove from cart' text if not already in shopping cart
let addItem = (itemName) => {
    if (!shoppingCart.includes(itemName)) {
        addRemoveFromCartButton(itemName);
        cartLiElement.append(createCartLi(itemName));
    }
    shoppingCart.push(itemName);
    updateCartCount();
    menuItems.forEach(element => {
        if (element.name === itemName) {
            updateCartTotal(element, 'add');
        }
    })
}

// define function to update cart total in dollars
let updateCartTotal = (item, op='add') => {
    if (op === 'add') {
        shoppingCartTotal += item.price;
    } else if (op === 'rem') {
        shoppingCartTotal -= item.price;
    };
    shoppingCartDollarsElement.textContent = " ($" + shoppingCartTotal / 100 + ")";
    let itemQty = shoppingCart.filter(element => element === item.name).length;
    document.getElementById(item.name + '-total').textContent = "$" + (item.price * itemQty) / 100;
    document.getElementById('total').textContent = "$" + shoppingCartTotal / 100;
}

// define function to update the cart text with the number of items
let updateCartCount = () => {
    txt = " " + shoppingCart.length + " item";
    if (shoppingCart.length == 1) {
        shoppingCartCountElement.textContent = txt;
    } else {
        shoppingCartCountElement.textContent = txt + "s";
    }
}

// define function to add remove from cart button
let remItem = (itemName) => {
    if (shoppingCart.includes(itemName)) {
        const itemIndex = shoppingCart.indexOf(itemName);
        shoppingCart.splice(itemIndex, 1);
        updateCartCount();
        menuItems.forEach(element => {
            if (element.name === itemName) {
                updateCartTotal(element, 'rem');
            }
        })
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
const createRemoveFromCartButton = (item) => {
    const remText = item.name + "-remove-from-cart";
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
    menuItems.forEach(element => {
        if (element.name === itemName) {
            document.getElementById(element.button).parentElement.append(createRemoveFromCartButton(element));
            document.getElementById(element.name + '-remove-from-cart').addEventListener('click', () => remItemFromCart(element.name));
        }
    })
}

displayMenuItems();