function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }

    return array;
}

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(range(1, 10));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));
