const numbers = [3, 1, 7, 9, 6, 50, 5, 2];

// Custom push function
function myPush(arr, newNum) {
    arr[arr.length] = newNum;  // Add new element to the end
    return arr;
}

// Custom pop function
function myPop(arr) {
    let lastElement = arr[arr.length - 1];  // Store the last element
    arr.length = arr.length - 1;  // Remove the last element by reducing length
    return lastElement;
}

// Custom toString function
function myToString(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += ',';  // Add commas between elements, but not after the last one
        }
    }
    return result;
}

// Custom join function
function myJoin(arr, separator = ',') {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += separator;  // Use the custom separator
        }
    }
    return result;
}

// Custom concat function
function myConcat(arr1, arr2) {
    let newArray = [];

    // Add elements from arr1
    for (let i = 0; i < arr1.length; i++) {
        newArray[newArray.length] = arr1[i];
    }

    // Add elements from arr2
    for (let i = 0; i < arr2.length; i++) {
        newArray[newArray.length] = arr2[i];
    }

    return newArray;
}

// Test myPush
myPush(numbers, 2);
console.log(numbers);  // Output: [3, 1, 7, 9, 6, 50, 5, 2, 2]

// Test myPop
let myNumber = [12, 13, 14, 15, 16, 19];
let popped = myPop(myNumber);
console.log(myNumber);  // Output: [12, 13, 14, 15, 16]
console.log(popped);  // Output: 19

// Test myToString
let array17 = [0, 8, "14", "15"];
console.log(myToString(array17));  // Output: "0,8,14,15"

// Test myJoin
const elements = ["candy", "icecream", "cake"];
console.log(myJoin(elements));  // Output: "candy,icecream,cake"
console.log(myJoin(elements, ''));  // Output: "candyicecreamcake"
console.log(myJoin(elements, '-'));  // Output: "candy-icecream-cake"

// Test myConcat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(myConcat(array1, array2));  // Output: [1, 2, 3, 4, 5, 6]