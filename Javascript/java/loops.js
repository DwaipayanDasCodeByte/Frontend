let a= 4;
console.log(a);
//for loop
let n;
n = 11;
let sum = 0;
for (let i = 1; i < n; i++) {
    sum = sum + i;

}
console.log(sum);

// for in loop
let object = {
    name: "das",
    role: "dev",
    company: "google"
}
for (const key in object) {


    const element = object[key];
    console.log(key, element)


}
//while loop
let i = 1;
while (i < 6) {
    console.log(i)
    i++;
}

//do - while loop
let a1 = 0;
do{
    console.log(a1)
    a1++;
}while(a1 < 20);