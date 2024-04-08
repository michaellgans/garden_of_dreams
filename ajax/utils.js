
// Request to API


// const fetch = require('node-fetch');

// (async () => {
//   const response = await fetch('https://trefle.io/api/v1/plants?token=YOUR_TREFLE_TOKEN');
//   const json = await response.json();
//   console.log(json);
// })();
          


async function fetchDataAndRender() {
  try {
    const response = await fetch('https://trefle.io/api/v1/distributions/okl/plants?token=SbeeVCPUVgWafdQTER04QdFsOCxJZ1B9WRqtInHqsDY');
    const json = await response.json();
		console.log('response gathered');
    console.log(json); // Call the render function with the fetched data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function renderData(data) {
	const plantList = document.getElementById('plantContainer');
	data.forEach(plant => {
		const plantDiv = document.createElement('div')
		plantDiv.textContent = plant.common_name;
		plantList.appendChild(plantDiv);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	fetchDataAndRender();
})






// $(document).ready(function(){

// 	// Using Oklahoma Plants for testing
// 	$.ajax({
// 		url: 'https://trefle.io/api/v1/distributions/okl/plants?token=SbeeVCPUVgWafdQTER04QdFsOCxJZ1B9WRqtInHqsDY',
// 		method: 'GET',
// 		success: function(response) {
// 			console.log('Successful API response')
// 			displayPlantData(response.data);
// 		},
// 		error: function(xhr, status, error) {
// 			console.error(status, error);
// 		}
// 	});
// });

// function displayPlantData(plantData) {
// 	var plantList = $('#plantContainer');
// 	plantData.forEach(function(plant) {
// 		var plantElement = `
// 		<div class="plant">
// 			<h2>${plant.common_name}</h2>
// 			<img src="${plant.image_url}" alt="${plant.common_name}">
// 			<p>${plant.scientific_name}</p>
// 		</div>
// 		`;
// 		plantList.append(plantElement)
// 	});
// }
