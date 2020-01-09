function everyWithLoop(array, test) {
    array.forEach(e => {
        if (!test(e)) {
            return false;
        }
    });

    return true;
}

function everyWithSome(array, test) {
    return !array.some(e => !test(e));
}

console.log(everyWithLoop([1, 3, 5], n => n < 10));
// → true
