// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000; //set the port to be used
const server = app.listen(port, listening);

//Listening function to make sure server is working
function listening() {
	console.log(`server running on ${port}`);
}

//Setup GET route
app.get('/all', function (req, res) {
	res.send(projectData);
});

//Setup POST route
app.post('/all', addWeather);

function addWeather (req, res) {
	data.push(req.body);
};