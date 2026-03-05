console.log('This is promises')
let prom1 = new Promise((resolve,reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("no rando number was suporrting you")
    }
    else{
        setTimeout(()=>{
            console.log('yes Im done')
            resolve('Harry')
        },2000)
    }

})

prom1.then((a) =>{
    console.log(a)
}).catch((err)=>{
    console.log(err)

})


const orderBurger = new Promise((resolve, reject) => {
    let isKitchenOpen = true;

    if (isKitchenOpen) {
        setTimeout(() => resolve("Here is your 🍔!"), 3000);
    } else {
        reject("Sorry, we are closed! ❌");
    }
});


orderBurger
    .then((food) => {
        console.log(food); 
    })
    .catch((error) => {
        console.log(error); 
    })
    .finally(() => {
        console.log("Process finished."); 
    });




let p3 = Promise.all([prom1,orderBurger])                              
p3.then((a)=>{
    console.log(a)
}).catch((e)=>{
    console.log(e)
})

// yes Im done promise.js:9:21
// Harry promise.js:17:13
// Here is your 🍔! promise.js:37:17
// Array [ "Harry", "Here is your 🍔!" ]
// promise.js:52:13
// Process finished. promise.js:43:17     // when both the promises resolve 
let p4 = Promise.allSettled([prom1,orderBurger])                              
p4.then((a)=>{
    console.log(a)
}).catch((e)=>{
    console.log(e)
})

