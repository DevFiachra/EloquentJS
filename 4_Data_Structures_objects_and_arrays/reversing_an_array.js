function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let valueHolder = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = valueHolder;
    }

    return array;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
