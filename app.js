let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1','div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let tagConst = {};

for (let tag of tags) {
    if (tagConst[tag]) {
        tagConst[tag] +=1;
    }else {
        tagConst [tag] = 1;
    }
}
console.log(tagConst)


let a = [1,2,3,45,32,56,61, 23,12,2,34,5,6,3,76,67,87,76]
let b = [1,45,32,3,4,2,56,76,67,87,89,8,56,54]
let result = []


for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] === b[j]){
            result.push(a[i])
        }
    }
}

console.log(result)


function averageOfPositiveNumbers(arr){
    let sum = 0
    let count = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            sum += arr[i]
            count++
        }
    }
    if (count === 0){
        return'error'
    }
    return sum/count
}

var numbers = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
console.log(averageOfPositiveNumbers(numbers))


var words =(arr)=>{
    let arrWithA = []
    let arrWithT =[]
    arr.forEach((item )=>{
            if(item.toLowerCase().includes("a")){
                arrWithA.push(item)
            }else if (item.toLowerCase().includes("t")){
                arrWithT.push(item)
            }else {
                words('error')
            }
        }
    )
    console.log("with a : "+arrWithA)
    console.log("withT t : "+arrWithT)
}
words(['text', 'frontend', 'apple'])