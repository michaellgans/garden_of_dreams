
// Request to API


// const fetch = require('node-fetch');

// (async () => {
//   const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN');
//   const json = await response.json();
//   console.log(json);
// })();
          


// async function fetchDataAndRender() {
//   try {
//     const response = await fetch('https://trefle.io/api/v1/distributions/okl/plants?token=SbeeVCPUVgWafdQTER04QdFsOCxJZ1B9WRqtInHqsDY');
//     const json = await response.json();
// 		console.log('response gathered');
//     console.log(json); // Call the render function with the fetched data
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// function renderData(data) {
// 	const plantList = document.getElementById('plantContainer');
// 	data.forEach(plant => {
// 		const plantDiv = document.createElement('div')
// 		plantDiv.textContent = plant.common_name;
// 		plantList.appendChild(plantDiv);
// 	});
// }

// document.addEventListener('DOMContentLoaded', () => {
// 	fetchDataAndRender();
// })
const url = 'https://trefle.p.rapidapi.com/api/v1/distributions/okl?token=SbeeVCPUVgWafdQTER04QdFsOCxJZ1B9WRqtInHqsDY';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '213d0efc24msh1e16df4517dc754p1042d8jsna8c568f82bde',
		'X-RapidAPI-Host': 'trefle.p.rapidapi.com'
	}
};

async function fetchData() {
	try {
			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
	} catch (error) {
			console.error(error);
	}
}

// Call the async function
fetchData();





// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://trefle.p.rapidapi.com/api/auth/claim?token=%3CREQUIRED%3E',
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		'X-RapidAPI-Key': '213d0efc24msh1e16df4517dc754p1042d8jsna8c568f82bde',
// 		'X-RapidAPI-Host': 'trefle.p.rapidapi.com'
// 	},
// 	processData: false,
// 	data: {
//     "origin": "https://example.com",
//     "ip": "12.23.34.45"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// 	// Using Oklahoma Plants for testing
// 	$.ajax({
// 		url: 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/distributions/okl/plants?token=SbeeVCPUVgWafdQTER04QdFsOCxJZ1B9WRqtInHqsDY',
// 		method: 'GET',
// 		success: function(response) {
// 			console.log('Successful API response');
// 			displayPlantData(response.data);
// 		},
// 		error: function(xhr, status, error) {
// 			console.error(status, error);
// 		}
// 	});
// });

function displayPlantData(plantData) {
	var plantList = $('#plantContainer');
	plantData.data.forEach(function(plant) {
		var plantElement = `
		<div class="plant">
			<h2>${plant.common_name}</h2>
			<p>${plant.scientific_name}</p>
		</div>
		`;
		plantList.append(plantElement);
	});
}
