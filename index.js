// Initial array of cats
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions (modify the original array)
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Non-destructive functions (return a new array, leave original unchanged)
function appendCat(name) {
    return [...cats, name]; // Returns a new array with the cat added at the end
}

function prependCat(name) {
    return [name, ...cats]; // Returns a new array with the cat added at the beginning
}

function removeLastCat() {
    return cats.slice(0, -1); // Returns a new array without the last cat
}

function removeFirstCat() {
    return cats.slice(1); // Returns a new array without the first cat
}

// Export functions for testing
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat
};
