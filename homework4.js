//PART1 Given an array of integers, find the pair of adjacent elements that has the largest product and
// return that product.


function biggestPair (arr){
    var result
    arr.sort(function(a,b){
        if(a>b){
            return 1
        }
        else{
            return -1
        }
    })
    for(let i=0; i<arr.length; i++){
        result = (arr[arr.length-1] * arr[arr.length-2])
    }
    return result
}

console.log(biggestPair([23,464,1]))

//PART2 Given an array of integers. All numbers are unique. Find the count of missing numbers between minimum and maximum elements to make integers sequence.


// var arr = [1,12,3,32]

function countMissing(arr){
    let result = 1
    arr.sort(function(a,b){
        if(a>b){
            return 1
        }
        else{
            return -1
        }
    })
    for(let i=0; i<arr[arr.length-1]; i++){
        if(result < arr[arr.length-1]){
            result++
        }
    }
    return `the count of missing nubers between ${arr[0]} and ${arr[arr.length-1]} is ${result - 2}`

}

console.log(countMissing(arr))

//PART3 Implement built in array sort method using bubble sort algorithm.

let arr = [1,5,3,4,5,4,3,2]
let temp

Array.prototype.mySort = function(){
    for(let i=0; i<this.length; i++){
        for(let j=i+1; j<this.length; j++){
            if(this[i]>this[j]){
                temp = this[i]
                this[i] = this[j]
                this[j] = temp
            }
        }
    }
    return arr
}



// console.log(arr.mySort())

//PART4 Insert a n positive number. Print the n-st prime number. ?????? cant bring 2 and 3 numbers 
function primeN(n){
    let count = 0
    var primeN
    for(let i=2; i<Infinity; i++){

        if(i%2 !== 0 && i%Math.sqrt(i) !== 0 && i%3 !== 0){
            count++
            primeN = i
            console.log(primeN)
        }
        else if(count == n){
            break
        }
    }
    return `${count} prime number is ${primeN}`
}
console.log(primeN(40))