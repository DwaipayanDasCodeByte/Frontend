let arr =[1,2,4,6,7,12]
arr[0] = 56; //mutable

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(typeof(arr))

console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop();
console.log(arr)
arr.push(50)
console.log(arr)

let a1 =[1,2,3]
let a2 = [4,5,6]
let a3 =[9,8,7]
let arr2 = a1.concat(a2,a3) 
console.log(arr2)

// console.log(arr.sort())

for(let i =0;i<arr.length;i++){
    console.log(arr[i])
}

arr.forEach ((value, index, arr1)=>{
    console.log(value, index, arr1)

})

let arr3=[1, 13, 5, 7, 11];
let newarr =[]
for(let i =0;i<arr3.length;i++){
    const element = arr3[i];
    newarr.push(element ** 2)

}
console.log(newarr)