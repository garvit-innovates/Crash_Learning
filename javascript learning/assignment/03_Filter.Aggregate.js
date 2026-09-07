let products = [   
    { id: 1, name: "Pen",      price: 10,  category: "Stationery",  inStock: true }, 
    { id: 2, name: "Notebook", price: 40,  category: "Stationery",  inStock: true },   
    { id: 3, name: "Book",     price: 50,  category: "Books",       inStock: false },   
    { id: 4, name: "Bag",      price: 200, category: "Accessories", inStock: true },   
    { id: 5, name: "Bottle",   price: 150, category: "Accessories", inStock: false },   
    { id: 6, name: "Novel",    price: 120, category: "Books",       inStock: true },   
    { id: 7, name: "Pencil",   price: 5,   category: "Stationery",  inStock: true }  
];


let groupProducts = {};
let stockProducts = {};


// Group products by category
for (let i = 0; i < products.length; i++) {

    let p = products[i];

    if (!groupProducts[p.category]) {
        groupProducts[p.category] = [];
    }

    groupProducts[p.category].push(p);
}

console.log("Grouped Products:");
console.log(groupProducts);


// Create categories in stockProducts
for (let i in groupProducts) {
    stockProducts[i] = 0;
}


// Calculate total stock value per category
for (let category in groupProducts) {

    for (let i = 0; i < groupProducts[category].length; i++) {

        let product = groupProducts[category][i];

        if (product.inStock) {
            stockProducts[category] += product.price;
        }
    }
}

console.log("Stock Value:");
console.log(stockProducts);


// Stationery products
console.log("Stationery length:", groupProducts.Stationery.length);


// Object does NOT have .length
console.log("Number of categories:", Object.keys(groupProducts).length);


// Find cheapest and most expensive in-stock item

let cheapest = null;
let expensive = null;


for (let i = 0; i < products.length; i++) {

    let product = products[i];

    if (product.inStock) {

        if (cheapest === null || product.price < cheapest.price) {
            cheapest = product;
        }

        if (expensive === null || product.price > expensive.price) {
            expensive = product;
        }
    }
}


console.log("Cheapest Item:", cheapest);
console.log("Most Expensive Item:", expensive);