// const array1 = [1,2,3,4,5,6,7,8,9];
// let lastItem = array1.shift();
// console.log("Last item:", lastItem)
// console.log("Array:", array1)
// array1.unshift(100);
// console.log(array1)

// let array1 = [1,2,3]
// let array2 = [5,6,7]
// array1.push(4);
// let result = array1.concat(array2)
// console.log("Result:", result)
// console.log("Array2", array1)

const person1 = {
firstname : "Jonah",
lastname : "Day",
gender : "male",
dob : "January 9, 2007",
}

const person2 = {
    firstname : "Riley",
    lastname : "Riley",
    gender : "male",
}

const person3 = {
    firstname : "Bryson",
    lastname : "Albers",
    gender : "male",
}
const peoplearray=[person1, person2, person3]
console.log("Array:", peoplearray[0].firstname)

for(let i = 0; i < peoplearray.length; i++){
let fullname = peoplearray[i].firstname + " " + peoplearray[i].lastname
console.log(fullname)
}