let a = "Dwaipayan"; //Immutable
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a.length);
let b = "Jhon";
console.log("His name is " + a);
console.log("His name is " + a + " and his friend name is " + b) ;
console.log(`his name is ${a}`); //template literals
console.log(b.toUpperCase());
console.log(a.toLowerCase());
//slice
console.log(a.slice(0,5));
console.log(a.slice(0,));
console.log(a.slice(3));
//replace
console.log(b.replace("Jh", "D"));
console.log(b.concat(a));
console.log(a.concat("is","a","mf"));