// Array of Nested Objects — Orders
// 1. Calculate the total amount per order (qty × price, summed across items).

// 2. Find total amount spent per customer name
//    (John appears in 2 orders — combine them).

// 3. Find the city that generated the most revenue.

// 4. Calculate the grand total across all orders.


let orders = [
    {
        orderId: 101,
        customer: {name: "John", city: "Mumbai"},
        items: [
            { name: "Shirt", qty: 2, price: 500 },
            { name: "Shoes", qty: 1, price: 1500 },
            { name: "Belt", qty: 1, price: 300 }]
    },

    {
        orderId: 102,
        customer: {name: "Priya",city: "Delhi"},
        items: [
            { name: "Bag", qty: 1, price: 2000 },
            { name: "Watch", qty: 1, price: 3500 }]
    },

    {
        orderId: 103,
        customer: {name: "John",city: "Mumbai"},
        items: [
            { name: "Cap", qty: 3, price: 200 }]
    }
];



// console.log(orders[0]);
// console.log(orders.length)


// for(let i=0; i<orders.length;i++){
//     // console.log(orders[i].items["i"])

// }

for(let order of orders){
    console.log(order)

}