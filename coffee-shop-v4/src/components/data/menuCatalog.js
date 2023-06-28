import { ulid } from "ulidx";

export const menuCatalog = [
  {
    id: ulid(),
    name: 'Bagels',
    price: '$5.00',
    // img: 'https://source.unsplash.com/400x400/?bagels'
    img: 'https://images.unsplash.com/photo-1627308595260-6fad84c40413?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
  },
  {
    id: ulid(),
    name: 'Muffins',
    price: '$3.50',
    // img: 'https://source.unsplash.com/400x400/?muffins'
    img: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: ulid(),
    name: 'Hot Coffee',
    price: '$2.00',
    // img: 'https://source.unsplash.com/400x400/?coffee'
    img: 'https://images.unsplash.com/photo-1561766926-a7c863179e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    id: ulid(),
    name: 'Iced Coffee',
    price: '$3.00',
    // img: 'https://source.unsplash.com/400x400/?icedcoffee'
    img: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80'
  },
  {
    id: ulid(),
    name: 'Espresso',
    price: '$2.50',
    // img: 'https://source.unsplash.com/400x400/?espresso'
    img: 'https://images.unsplash.com/photo-1595928642581-f50f4f3453a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1455&q=80'
  },
  {
    id: ulid(),
    name: 'Lattes',
    price: '$4.00',
    // img: 'https://source.unsplash.com/400x400/?latte'
    img: 'https://images.unsplash.com/photo-1621135177072-57c9b6242e7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }
];

export const coffeeMenuCatalog = [
    {
        id: "espresso",
        name: "Espresso",
        price: 400,
        description: "Double shot.",
        button: "espresso-btn",
        headerId: "espresso-txt",
        category: "hot-drinks",
        imgUrl: "./images/caglar-oskay-44DdVmC2gy0-unsplash-square.jpg",
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
        imgUrl: "./images/jakub-dziubak-XtUd5SiX464-unsplash-square.jpg",
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
        imgUrl: "./images/daniel-hooper-w2wsyjSaHns-unsplash-square.jpg",
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
        imgUrl: "./images/wade-austin-ellis-yN7prWLW7xg-unsplash-square.jpg",
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
        imgUrl: "./images/",
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
        imgUrl: "./images/",
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
        imgUrl: "./images/ann-74NChp1cn5I-unsplash-square.jpg",
        quantity: 0
    }
];
