let numberarray = [1,2,3,4,5,6,7,8,9,10]
let newlist = []
 let arraylength = numberarray.length
 for(let i = 0; i < arraylength; i++){
     let tempvar = numberarray.pop()
     newlist.push(tempvar)
 }
 console.log("OldList:", numberarray)
 console.log("Newlist:", newlist)
