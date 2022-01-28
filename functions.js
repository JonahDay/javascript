//  function addAB(parameter1, parameter2){
//      return(parameter1 + parameter2)
//  }

//  let functionresult = addAB(7,10)
//  console.log("Result:", functionresult)

// for(let i = 1; i < 11; i++){
//     console.log("The value of i:", i)
//     console.log("Function:", addAB(i,i))
// }

// let array1 = [1,2,3,4,5,6,7,8,9,10]
// function reverse(parameter1){
//     let newlist = []
//      let arraylength = array1.length
//     for(let i = 0; i < arraylength; i++){
//         let tempvar = parameter1.pop()
//         newlist.push(tempvar)
//     }
//     return(newlist)
//  }
// console.log("ReversedOrder:", reverse(array1))

function function2(str){
    let result = str.split("")
    result.reverse()
    return result.join("")
}
console.log(function2("Hello world"))