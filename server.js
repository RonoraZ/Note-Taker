//Installing npm packages that will help with functionality of the app
const express = require("express");

// Import routes
const routesApi = require("./Routes/routesApi"); 
const routesHtml = require("./Routes/routesHtml");

// Initialize Express application
const app = express();

//Setting up the port
const PORT = process.env.PORT || 3001;

// Setting up middleware to serve static files and parse request body to json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Use imported routes
app.use("/api", routesApi); 
app.use("/",routesHtml);

//Starting up the server
app.listen(PORT, function () {
  console.log(`Server is working on PORT:${PORT}`);
});