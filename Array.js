
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

    console.log('the length of arrays is : ' + lenght);
}

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

    if (metalPriceArray[i] === metalPriceArray[5]) {

        metalPriceArray[i] = metalPriceArray.splice(0, 5);

        console.log(metalPriceArray[i])
    }

}
