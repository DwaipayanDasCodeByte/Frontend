async function getData() {
    //simulating getting data from a server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 2500)
    })
}

async function main() {

    console.log("Loading Modules")
    console.log("Do something else")
    console.log("Load Data")
    let data = await getData()
    console.log(data)
    console.log("Process data")
}

main()