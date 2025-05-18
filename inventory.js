console.log("Practical Task");
console.log("");

// Define Shoes inventory constructor.
function Shoes(name, productcode, quantity, valueperitem) {
    this.name = name;
    this.productcode = productcode;
    this.quantity = quantity;
    this.valueperitem = valueperitem
}
// Create instances of the Shoes object.
let shoe1 = new Shoes("Chelsea", "Ch", 250, "£70");
let shoe2 = new Shoes("Derby", "De", 300, "£65");
let shoe3 = new Shoes("Brogue", "Br", 200, "£75");
let shoe4 = new Shoes("Boot", "Bo", 150, "£50");
let shoe5 = new Shoes("Oxford", "Ox", 350, "£60");

// To push the above to an array, create an array that stores each pair.
let shoes = [shoe1, shoe2, shoe3, shoe4, shoe5];

// Define a get function to find any pair of shoes in the array based on name method.
Object.defineProperty(Shoes.prototype, "getName", {
    get: function() {
        return this.name;
    },
});

console.log(shoe4);

// Define a function to find the pair of shoes with the lowest value by sorting the prices in ascending order.
function findcheapestShoe (shoes) {
    shoes.sort((firstPair, secondPair) =>
        firstPair.valueperitem < secondPair.valueperitem ? -1 : 1
    );

    let cheapestPair = shoes[0]; // since the first price will be the smallest

    // Using a template and string literals to display the details
    console.log(`
    The cheapest pair available in store is the ${cheapestPair.name}
    ${cheapestPair.productcode},
    which costs ${cheapestPair.valueperitem}
    `);
}

// Call the findcheapestShoe function.
findcheapestShoe(shoes);

// Define a function to find the pair of shoe with the highest value by sorting the prices in descending order.
function findMostCostly (shoes) {
    shoes.sort((firstPair, secondPair) =>
        firstPair.valueperitem > secondPair.valueperitem ? -1 : 1
    );

    let mostCostlyPair = shoes[0]; // since the first price will be the highest.

    // Using a template and string literals to display the details
    console.log(`
    The most costly pair available in store is the ${mostCostlyPair.name}
    ${mostCostlyPair.productcode},
    which costs ${mostCostlyPair.valueperitem}
    `);
}

// Call the findMostCotly function.
findMostCostly(shoes);

// Define a function to edit each property using a for loop.
function editName(shoes, shoeName, newName) {
    for (let i = 0; i < shoes.length; i++) {
        if (shoes[i].name === shoeName) {
            shoes[i]["name"] = newName;
            return[i];
        }
    }
}

function editCode(shoes, shoeCode, newCode) {
    for (let i = 0; i < shoes.length; i++) {
        if (shoes[i].productcode === shoeCode) {
            shoes[i]["productcode"] = newCode;
            return shoes[i];
        }
    }
}

function editQuantity(shoes, shoeQuantity, newQuantity) {
    for (i = 0; i < shoes.length; i++) {
        if (shoes[i].quantity === shoeQuantity) {
            shoes[i]["quantity"] = newQuantity;
            return shoes[i];
        }
    }
}

function editValue(shoes, shoeValue, newValue) {
    for (i = 0; i < shoes.length; i++) {
        if (shoes[i].valueperitem === shoeValue) {
            shoes[i]["valueperitem"] = newValue;
            return shoes[i];
        }
    }
}

editName(shoes, "Derby", "Freddy");
editCode(shoes, "Br", "Bro");
shoe2.productcode = "Fred"
editQuantity(shoes, 150, 180);
editValue(shoes, "£50", "£80")

console.log("\nA tabular presentation of the updated table of objects:")
console.table(shoes);
console.log("");

// To oder objects in ascending order based on value per item;
function orderShoeValues (shoes) {
    shoes.sort((firstPair, secondPair) =>
        firstPair.valueperitem < secondPair.valueperitem ? -1 : 1
    );

    let orderedValues = shoes[i]
    return orderedValues;

}

console.log("\nTabular presentation of ordered objects based on value per item:")
orderShoeValues(shoes);
console.table(shoes);
console.log();
console.log("End of Code")

// References
// 1. HyperionDev (2024) Object-Oriented Programming/11-039, GitHub. Available at: https://github.com/hyperiondev-bootcamps/MM24110016008/blob/main/T11 – Object-Oriented Programming/11-039 Object-Oriented Programming.pdf (Accessed: 16 January 2025).
// 2. MDN (2024a) Array.prototype.sort() - JavaScript, MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort (Accessed: 16 January 2025).
// 3. MDN (2024b) console: table() static method - Web APIs, MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/API/console/table_static (Accessed: 16 January 2025).
// 4. Mimo (no date) JavaScript Sort Method: Advanced Array Sorting Techniques, Mimo. Available at: https://mimo.org/glossary/javascript/sort (Accessed: 16 January 2025).
// 5. Olawanle, J. (2023) JavaScript Sort Array - How to Sort an Array Accurately, FreeCodeCamp. Available at: https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/ (Accessed: 16 January 2025).