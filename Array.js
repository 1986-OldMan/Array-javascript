
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
    1655,
    11000
];

console.log(price);


let lenght = lenghtArray();

function lenghtArray() {

    let metalArray = metal.length;

    console.log(metalArray);

    let priceArray = price.length;

    console.log(priceArray);

    let lenght = metalArray + priceArray;

    //here you have posibility to put "return lenght".
    return lenght
}

console.log('the length of arrays is : ' + lenght);

// using for to count length of array

for (let i = 0; i < metal.length; i++) {

    console.log('the length of array is' + ' ' + metal.length);
}

for (let i = 0; i < price.length; i++) {

    console.log('the length of array is' + ' ' + price.length);
}

const metalPriceArray = metal.concat(price);

console.log(metalPriceArray)

for (let i = 0; i < metalPriceArray.length; i++) {


    if (metalPriceArray[i] === "Gold") {

        metalPriceArray[i] = metalPriceArray[i] + ' = ' + metalPriceArray[5] + '$';

    }

    if (metalPriceArray[i] === "Silver") {

        metalPriceArray[i] = metalPriceArray[i] + ' = ' + metalPriceArray[6] + '$';

    }

    if (metalPriceArray[i] === "Platinum") {

        metalPriceArray[i] = metalPriceArray[i] + ' = ' + metalPriceArray[7] + '$';

    }

    if (metalPriceArray[i] === "Palladium") {

        metalPriceArray[i] = metalPriceArray[i] + ' = ' + metalPriceArray[8] + '$';

    }

    if (metalPriceArray[i] === "Rhodium") {

        metalPriceArray[i] = metalPriceArray[i] + ' = ' + metalPriceArray[9] + '$';

    }

}

//remove string element from array.

for (let i = 0; i < metalPriceArray.length; i++) {

    if (metalPriceArray[i] === metalPriceArray[5] && metalPriceArray[6] && metalPriceArray[7] && metalPriceArray[8] && metalPriceArray[9]) {

        metalPriceArray[i] = metalPriceArray.splice(0, 5);

        console.log(metalPriceArray[i]);
    }
}

// js array sorting , reverse ,  foreach , map , filter , reduce properties.

const BucharestStockExchangePortofolio = [

    "SNN",
    "SNP",
    "TEL",
    "TGN",
    "WINE",
    "SNG",
    "TVBETETF",
    "FP",
    "TRP"
];

console.log(BucharestStockExchangePortofolio);

// using sort

for (let i = 0; i < BucharestStockExchangePortofolio.length; i++) {

    if (BucharestStockExchangePortofolio) {

        BucharestStockExchangePortofolio.sort();

    }

}

console.log(BucharestStockExchangePortofolio);

// using reverse

for (let i = 0; i < BucharestStockExchangePortofolio.length; i++) {

    if (BucharestStockExchangePortofolio) {

        BucharestStockExchangePortofolio.reverse();

    }

}

console.log(BucharestStockExchangePortofolio);


const NumberOfShares = [

    50,
    11,
    100,
    3945,
    3,
    1,
    693,
    22,
    10

];

console.log(NumberOfShares);

// using sort with function to sort ascending order.

let sorted = NumberOfShares.sort(function (a, b) { return (a - b) });

console.log(sorted);

// using foreach properties to calls a function once for each array element.

let text = ""

NumberOfShares.forEach(myFunction);

document.getElementById("test").innerHTML = text;

function myFunction(value) {

    text += value + "<br>";

    console.log(text);
}

// using map properties.

const NewNumberOfShares = NumberOfShares.map(mappingFunction);

document.getElementById("demo").innerHTML = NewNumberOfShares;

function mappingFunction(value) {

    return value + 1;
}

console.log(NewNumberOfShares);

// using filter method creates a new array with array elements that pass a test.

const filterNumberOfShare = NumberOfShares.filter(filterFunction);

document.getElementById("number1").innerHTML = filterNumberOfShare;

function filterFunction(value, index, array) {

    return value <= 100;
}

console.log(filterNumberOfShare);
