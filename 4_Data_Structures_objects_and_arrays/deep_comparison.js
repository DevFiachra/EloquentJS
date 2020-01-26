function deepEqual(a, b) {}

// Your code here.

let obj = { here: { is: "an" }, object: 2 };

for (key in Object.keys(obj)) {
    console.log(key);
}

console.log(obj["here"]);
