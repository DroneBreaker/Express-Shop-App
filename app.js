// // const fs = require('fs')
// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const routes = require('./routes');


const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes, shopRoutes)


app.listen(3000)
// const server = http.createServer(app);
// server.listen(3000)
// const server = http.createServer(routes)
        // // redirect user back to home page
        // fs.writeFileSync('message.txt', 'DUMMY')
        // res.statusCode = 302
        // res.setHeader('Location', '/')
        // // res.writeHead(302, {'Location': '/'})
        // return res.end()


// // fs.writeFileSync('hello.txt', 'Hello World')

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done');
//         }, 1500);
//     });

//     return promise
// };

// setTimeout(() => {
//     console.log('Timer is done');
//     fetchData().then(text => {
//         console.log(text);
//     }).then(text2 => {
//         console.log(text2)
//     });
// }, 2000)

// console.log('Hello')
// console.log('Hi')
