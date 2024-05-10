
// let p=new Promise((resolve ,reject)=>{

//     console.log("promise is pending")

//     setTimeout(()=>{
// alert("welcom my ")

// console.log("i am promise ")
// // resolve(true)
// reject(new error("i am error"))

//     },10000)


// })
// p1.then((value)=>{

// console.log(value)

// })

// P2.catch((error)=>{
// console.log("some error in occure in p2")

// })

let p1= new Promise((resolve , reject)=>{
console.log("promise is pending")

setTimeout(()=>{

    alert("select your pasword")
console.log("i am promise")
resolve(true)

},10000)


})
let p2= new Promise((resolve , reject)=>{
    console.log("promise is pending")
    
    setTimeout(()=>{
    
        alert("select your pasword")
    console.log("i am promise")
    reject(new error("this is an erorr"))
    
    },10000)
    
    
    })
    p1.then((value)=>{
        console.log(value)
    })
    p2.catch((error)=>{
        console.log("some error in occur in p2")
    })

    let a=prompt("enter your valid pasword")
    num= Number.parseInt("value")
    {
alert(pasword)

    }