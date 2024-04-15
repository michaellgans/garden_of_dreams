document.addEventListener("DOMContentLoaded", function() {
	const button = document.getElementById("card-button");

	if (button) { // Check if button exists before adding event listener
			button.addEventListener("click", function() {
					fetchPlantsData('jsonfiles/ala.json')
							.then(data => {
									updatePlantsContent(data);
							})
							.catch(error => {
									console.error('Error loading plants data:', error);
							});
			});
	} else {
			console.error('Button not found.');
	}

	function fetchPlantsData(url) {
			return fetch(url)
					.then(response => {
							if (!response.ok) {
									throw new Error('Network response was not ok');
							}
							return response.json();
					});
	}

	function updatePlantsContent(data) {
			// Shuffle the data array
			shuffleArray(data);

			// Clear previous content
			const plantRow = document.getElementById('plant-row');
			plantRow.innerHTML = "";

			// Generate 10 random plants
			for (let i = 0; i < 9; i++) {
					const randomPlant = data[i];
					const cardClone = createPlantCard(randomPlant);
					plantRow.appendChild(cardClone);
			}
	}

	// Function to create a card for a plant
	function createPlantCard(plant) {
		const col = document.createElement('div');
		col.classList.add('col-md-4', 'col-sm-6', 'col-12', 'mb-4');

		const card = document.createElement('div');
		card.classList.add('card');

		const img = document.createElement('img');
		img.classList.add('card-img-top');
		img.src = plant.image_url;
		card.appendChild(img);

		const cardBody = document.createElement('div');
		cardBody.classList.add('card-body');
		card.appendChild(cardBody);

		const scientificName = document.createElement('h2');
		scientificName.classList.add('card-title', 'plant-scientific', 'font-weight-bold');
		scientificName.textContent = plant.scientific_name;
		cardBody.appendChild(scientificName);

		const commonName = document.createElement('p');
		commonName.classList.add('card-text', 'plant-common', 'font-weight-light');
		commonName.textContent = plant.common_name;
		cardBody.appendChild(commonName);

		const googleLink = document.createElement('p');
		googleLink.classList.add('card-text', 'plant-google-url');
		const glink = document.createElement('a');
		glink.href = plant.google_url;
		glink.target = '_blank';
		glink.textContent = 'Search on Google';
		googleLink.appendChild(link);
		cardBody.appendChild(googleLink);

		const plantnetLink = document.createElement('p');
		googleLink.classList.add('card-text', 'plant-plantnet-url');
		const plink = document.createElement('a');
		pink.href = plant.plantnet_url;
		plink.target = '_blank';
		plink.textContent = 'Search on Google';
		plantnetLink.appendChild(plink);
		cardBody.appendChild(plantnetLink);

		col.appendChild(card);
		return col;
}
	// Function to shuffle an array (Fisher-Yates shuffle)
	function shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[array[i], array[j]] = [array[j], array[i]];
			}
	}
});
