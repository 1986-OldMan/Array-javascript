
const metal = [

    "Gold",
    "Silver",
    "Platinum",
    "Palladium",
    "Rhodium"

];

console.log(metal);

let price = [

    1925.33,
    25.01,
    1030,
    1651,
    11000
];

console.log(price);


let lenght = lenghtArray()

function lenghtArray() {

    let metalArray = metal.length;

    console.log(metalArray);

    let priceArray = price.length;

    console.log(priceArray);

    let lenght = metalArray + priceArray;

    console.log('the length of arrays is : ' + lenght);
}

// using for to count length of array

for (let i = 0; i < metal.length; i++) {


    console.log('the length of array is' + ' ' + metal.length);
}

for (let i = 0; i < price.length; i++) {


    console.log('the length of array is' + ' ' + price.length);
}


