// ANKESH'S STEPS
// 1) Create project folder.
// 2) Initialize npm for package management(Generate package.json) (npm init).
// 3) Set up package.json for running server.js/app.js or any.js file.
// 4) For initial server setup need express package. npm i express to install express library.
// 5) Require express library into server.js (you can require it on your file where you want to setup server).
const express = require("express");

// 6) Create server.
const app = express();
const port = 3333;

app.listen(port);
console.log("SERVER IS STARTED ON PORT: ", port);

// 7) Finish..
