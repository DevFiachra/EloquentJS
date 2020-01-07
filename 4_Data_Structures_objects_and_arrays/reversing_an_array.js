function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

function reverseArrayInPlace(array) {}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
