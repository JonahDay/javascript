const cars = ["bmw", "truck", "tuktuk",] ;
console.log("Second Element:", cars [2]) ;

for(let i = 0; i < cars.length; i++){
    console.log(cars[i], i)
};

let total = 0 ;
const numbers = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < numbers.length; i++){
    total = total + numbers[i]
console.log("Inside total loop", total)
};
console.log("Grand total:", total);