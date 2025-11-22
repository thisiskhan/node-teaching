// const add = require("./math")
// console.log(add(15, 15))
// //Synchronous Vs Asynchronous Programing
// //Nodejs -- > Asynchronous by default.
// //Synchronous 
// console.log("A")
// console.log("B")
// console.log("C")
// console.log("D")

// //Asynchronous
// console.log("Start")

// setTimeout(() =>{
//     console.log("Inside Timeout")  //Event Loop
// }, 2000)

// console.log("End")

// //Event Loop
// //this event loop allows node.js to handle non-breaking operations, even though JS is single threaded.

//Basic HTTP Server.
// const http = require('http')
// const server = http.createServer((req, res) =>{
//     res.write("This is from node.js http server")
//     res.end()
// })

// server.listen(3000, ()=>{
// console.log("Server running on http://localhost:3000")
// });


//Handling Routes & Requests.
const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Page")
    }else if(req.url === "/about"){
        res.end("About page")
    }else{
        res.end("404 Page Not found")
    }
});

server.listen(3000)