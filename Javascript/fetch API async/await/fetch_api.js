console.log('hello')
async function getAPI(){
    let x =  await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // let data = await x.json()//   // data in raw format or locked ,it coverts the text into javascript object
    let data = await x.text()
    return data
}
async function main() {

    console.log("Loading Modules")
    console.log("Do something else")
    console.log("Load Data")
    let info = await getAPI() // if we dont use await function then it will give the output as 'pending'
    console.log(info)
    console.log("Process data")
    console.log("API fetched")
}

main()

//settle means resolve or reject
//resolve means promise has settled successfully
//reject means promise has not settled successfully