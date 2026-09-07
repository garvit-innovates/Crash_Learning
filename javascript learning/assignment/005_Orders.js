let orders = [
    {
        orderId: 101,
        customer: {
            name: "John",
            city: "Mumbai"
        },
        items: [
            { name: "Shirt", qty: 2, price: 500 },
            { name: "Shoes", qty: 1, price: 1500 },
            { name: "Belt", qty: 1, price: 300 }
        ]
    },

    {
        orderId: 102,
        customer: {
            name: "Priya",
            city: "Delhi"
        },
        items: [
            { name: "Bag", qty: 1, price: 2000 },
            { name: "Watch", qty: 1, price: 3500 }
        ]
    },

    {
        orderId: 103,
        customer: {
            name: "John",
            city: "Mumbai"
        },
        items: [
            { name: "Cap", qty: 3, price: 200 }
        ]
    }
];


// 1. Calculate total amount per order

for (let order of orders) {

    let total = 0;

    for (let item of order.items) {
        total += item.qty * item.price;
    }

    console.log(
        "Order", order.orderId,
        "Total:", total
    );
}


// 2. Find total amount spent per customer

let customerTotal = {};

for (let order of orders) {

    let total = 0;

    for (let item of order.items) {
        total += item.qty * item.price;
    }

    let name = order.customer.name;

    if (customerTotal[name]) {
        customerTotal[name] += total;
    } else {
        customerTotal[name] = total;
    }
}

console.log("Customer Total:", customerTotal);


// 3. Find the city that generated the most revenue

let cityTotal = {};

for (let order of orders) {

    let total = 0;

    for (let item of order.items) {
        total += item.qty * item.price;
    }

    let city = order.customer.city;

    if (cityTotal[city]) {
        cityTotal[city] += total;
    } else {
        cityTotal[city] = total;
    }
}

let highestCity = "";
let highestRevenue = 0;

for (let city in cityTotal) {

    if (cityTotal[city] > highestRevenue) {
        highestRevenue = cityTotal[city];
        highestCity = city;
    }
}

console.log("Highest Revenue City:", highestCity);
console.log("Revenue:", highestRevenue);


// 4. Calculate grand total

let grandTotal = 0;

for (let order of orders) {

    for (let item of order.items) {
        grandTotal += item.qty * item.price;
    }
}

console.log("Grand Total:", grandTotal);