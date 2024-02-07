// const  express = require('express');
// const  http  = require('http');

// const app = express();
// // const server = createServer(app);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// app.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   // res.setHeader('Content', 'text/plain');
//   res.end('Hello World\n');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

/*
Nodejs Server without express , BODY Stores String data 
const http = require('node:http');
const { parse } = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Handling GET requests
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World (GET)\n');
  } else if (req.method === 'POST') {
    // Handling POST requests
    let body = '';

    req.on('data', (chunk) => {
      // Accumulate the POST data
      body += chunk.toString();
    });

    req.on('end', () => {
      // Parse the POST data
      const postData = parse(body);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`Hello ${postData.name || 'World'} (POST)\n`);
    });
  } else {
    // Handling other HTTP methods
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


Nodejs Server without express , BODY Stores JSON data 


const http = require('node:http');
const { parse } = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    // Handling GET requests
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World (GET)\n');
  } else if (req.method === 'POST') {
    // Handling POST requests with JSON data
    let body = '';

    req.on('data', (chunk) => {
      // Accumulate the POST data
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        // Parse the JSON data
        const jsonData = JSON.parse(body);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: `Hello ${jsonData.name || 'World'} (POST)` }));
      } catch (error) {
        res.statusCode = 400; // Bad Request
        res.setHeader('Content-Type', 'text/plain');
        res.end('Invalid JSON data\n');
      }
    });
  } else {
    // Handling other HTTP methods
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


*/

// const readline = require('node:readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// readline.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   readline.close();
// });

// console.log(process.argv);

//Middlewares

// const express = require('express');

// const reqFilter= (req, res, next) => {
//   if (!req.query.age) {
//       res.send("Please provide your age")
//   }
//   else if (req.query.age<18) {
//       res.send("You are under aged")
//   }
//   else {
//       next();
//   }
// }
// const app = express();

// const route= express.Router();

// // app.use(reqFilter);
// route.use(reqFilter);
// app.use('/',route);

// app.get('/', (res, res) => {
//     res.send('Welcome to Home page')
// });

// app.get('/users', (res, res) => {
//     res.send('Welcome to Users page')
// });

// route.get('/about', (res, res) => {
//     res.send('Welcome to About page')
// });
// route.get('/contact', (res, res) => {
//     res.send('Welcome to contact page')
// });

// app.listen(3000)

// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();
// const hostname = "localhost";
// const port = 3000;

// //Middlewares

// app.use(express.json());
// //When a request is made to the server and contains a JSON payload in the request body (e.g., in a POST or PUT request).
// // the express.json() middleware parses the JSON data and sets req.body to be a JavaScript object representing the parsed JSON.

// mongoose.connect("mongodb://localhost:27017/usersdetail");

// const userSchema = mongoose.Schema({
//   name: String,
//   phonenumber: Number,
// });

// //defualt field will be __id (unique id for every documents), __v (version key) automatically 
// //set by mongoose

// const User = mongoose.model("Users",userSchema);

// //Creating a user

// app.post("/create", async (req, res) => {
//   let data = new User(req.body);
//   //When you create a new instance of a Mongoose model,
//   // Mongoose takes care of converting the JavaScript object (from req.body) into a Mongoose document.
//   const result = await data.save();
//   res.send(result);
// });

// //Updating a user

// app.put("/update/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await User.updateOne(
//     req.params, //condition object
//     { $set: req.body } //parameter needs to be change
//   );
//   res.send(data);
// });

// //Deleting a user
// app.delete("/delete/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await User.deleteOne(req.params);//repository
//   res.send(data);
// });


// //Listing all the users 

// app.get("/list", async (req, res) => {
//   let data = await User.find();
//   res.send(data);
// })

// //default 

// app.get("/", async (req, res) => {
//   // let data = await User.find();
//   res.send('<h1>Running properly</h1>');
// })

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./User/Routes/userRoutes");
const cors = require("cors");

const app = express();
const hostname = "localhost";
const port = 3001;
app.use(express.json());
app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

mongoose.connect("mongodb://localhost:27017/usersdetail");

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  // res.send('<h1>Running properly</h1>');
  res.send({
    total : 100,
    additional : 10
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
