/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = ',us&appid=0a31ee3c06242528db32c04a476eae93&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Create Weather Response

const weatherResponse = () => {
	
	//set variables
	const zipCode = document.getElementById("zip").value;
	const feelings = document.getElementById("feelings").value;
	const newURL= baseURL+zipCode+apiKey

	console.log(zipCode);
	console.log(feelings);
	console.log(newURL);

	//Get data from API
	getData(newURL)

	.then(function(newData){
		console.log(newData);
		postData('/addWeather', {date:newDate, temp:newData.main.temp, content: feelings});
})};

//Create async function to communicate with API
const getData = async (url) => {
	const res = await fetch(url);
	//Call API
	try {
		const newData = await res.json();
		return newData;
	}  catch(error) {
		console.log("error", error);
	}
} 

const postData = async (url = '', data = {}) =>{
	console.log(data);
	const response = await fetch(url, {
		method: 'POST', 
		credentials: 'same-origin', 
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	try {
		const update = await response.text();
			return update;
			console.log(update);
	} catch(error) {
		console.log("error", error);
	}
};

//set event listener
document.getElementById("generate").addEventListener("click", weatherResponse);

