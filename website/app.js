/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let zipCode = '63033'
let apiKey = ',us&appid=0a31ee3c06242528db32c04a476eae93&units=imperial';
const newURL= baseURL+zipCode+apiKey
console.log(newURL);

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


//Create async function to communicate with API
const postData = async (url) => {
	const res = await fetch(url);
	//Call API
	try {
		const newData = await res.json();
		console.log(newData);
	}  catch(error) {
		console.log("error", error);
	}
} 
