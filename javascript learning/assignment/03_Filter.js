// Array of Objects — Filter & Aggregate

// Group products by category into an object of arrays.
// Find total stock value per category (sum of price for in-stock items).
// Find the cheapest and most expensive in-stock item.

// gropuped obj = {Stationary : [{ id: 1, name: "Pen",      price: 10,  category: "Stationery", inStock: true } ,{ id: 2, name: "Notebook", price: 40,  category: "Stationery", inStock: true }, { id: 7, name: "Pencil",   price: 5,   category: "Stationery", inStock: true }],



let products = [  
    { id: 1, name: "Pen",      price: 10,  category: "Stationery", inStock: true },
    { id: 2, name: "Notebook", price: 40,  category: "Stationery", inStock: true },  
    { id: 3, name: "Book",     price: 50,  category: "Books",      inStock: false },  
    { id: 4, name: "Bag",      price: 200, category: "Accessories",inStock: true },  
    { id: 5, name: "Bottle",   price: 150, category: "Accessories",inStock: false },  
    { id: 6, name: "Novel",    price: 120, category: "Books",      inStock: true },  
    { id: 7, name: "Pencil",   price: 5,   category: "Stationery", inStock: true } 
];


let groupProducts = {}
let stockProducts = {}

// making category
for ( let i = 0 ; i<products.length ; i++){
    p = products[i];
    if(!groupProducts[p.category]){
        groupProducts[p.category] = [];
    }
    groupProducts[p.category].push(p)
}
// console.log(groupProducts); // print all 


// stockProducts items calculate
for(let i in groupProducts){
    stockProducts[i]=0;     
}








// console.log(stockProducts); // print stock variable 

// collect stationary products

console.log(groupProducts.Stationery.length);
console.log(groupProducts.length);

// console.log(stockProducts.length);
// console.log(groupProducts.length)

// for(let i=0; i<groupProducts.length;i++){
//     console.log(i);
//     for(let j =0; j<groupProducts[i].length; j++){
//     console.log(j);
//         // console.log(groupProducts[i][j].inStock);
//     }
// }




// console.log(groupProducts.Stationery[0].inStock);
// // console.log(groupProducts.Books[0].inStock);
// console.log(groupProducts.Stationery[1].inStock);
// console.log(groupProducts.Stationery[2].inStock);




// console.log(stockProducts.length)

// for(let i = 0; i<groupProducts.length; i++ ){
//     // console.log(groupProducts.Stationery[i].inStock)
// }








// let Stationery = [];
// let Books = [];
// let Accessories = [];


//     if(category === "Stationery"){
//         Stationery.push(products[i])
//     }
//     else if(category === "Books"){
//         Books.push(products[i])

//     }else if(category === "Accessories"){
//         Accessories.push(products[i])
//     }
// }

// // array 
// console.log(Stationery);
// console.log(Books);
// console.log(Accessories);

// // total 
// console.log(`stock value in Accessories ${Accessories.length}`);
// console.log(`stock value in Stationery ${Stationery.length}`);
// console.log(`stock value in Books ${Books.length}`);

// // in stock 

// let nCategory = [Stationery,Books,Accessories];

// for(i in nCategory){

// }






