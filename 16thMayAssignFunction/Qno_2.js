// Write a function that takes in an array of numbers and multiplies each of the elements by 2
function arrayOfNumber(array){
    let newArray=[];
    for(i=0; i<array.length; i++){
        newArray.push(2*array[i])
    }
    return newArray
}
console.log(arrayOfNumber([1,2,3,4,10]));