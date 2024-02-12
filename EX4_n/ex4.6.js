
const jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

// Print the properties of the object
console.log('Properties of the object:');
for (let key in jsonObject) {
    console.log(key + ':'+ jsonObject[key]);
}

// Delete the second property
const keys = Object.keys(jsonObject);
if (keys.length >= 2) {
    const secondProperty = keys[1];
    delete jsonObject[secondProperty];
    console.log('\nSecond property deleted:', secondProperty);
} else {
    console.log('\nThere are not enough properties to delete the second property.');
}

// Get the length of the object
const length = Object.keys(jsonObject).length;
console.log('\nLength of the object:', length);
