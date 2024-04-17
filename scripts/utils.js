// Comment A (local, main) 4/17 11:20am
$(document).ready(function() {
  // Fetch the JSON file
  $.getJSON('../static/data/states.json', function(data) {
    // Extract state names for populating dropdown
    var stateNames = Object.keys(data.states);

    // Populate dropdown with state names
    var dropdown = $("#stateDropdown");
    $.each(stateNames, function(index, stateName) {
      dropdown.append($("<option />").val(stateName).text(stateName));
    });

		dropdown.val("Oklahoma");
		changeTitle("Oklahoma");
		displayPlants(data.states["Oklahoma"]);

    // Event listener for dropdown change
    dropdown.on("change", function() {
      var selectedState = $(this).val();
			changeTitle(selectedState);
      var plants = data.states[selectedState];
			var plantsContainer = $("#plantsContainer");
			plantsContainer.empty();
      displayPlants(plants);
    });
  })
  .fail(function(jqxhr, textStatus, error) {
    var err = textStatus + ", " + error;
    console.error("Error fetching JSON file: " + err);
  });
});

function changeTitle(state) {
	var bannerTitle = $('#stateTitle');
	bannerTitle.text(state);
}

// Function to display plants for the selected state
function displayPlants(plants) {
	shuffleArray(plants);
	plants = plants.slice(0, 9);

  var plantsContainer = $("#plantsContainer");
  plantsContainer.empty(); // Clear existing plants
	var idCount = 1;

  $.each(plants, function(index, plant) {
    var plantDiv = $("<div>");
    plantDiv.html(`
		<div class="plantCard m-2" data-bs-toggle="modal" data-bs-target="#exampleModal${idCount}" style="background-image: url(${plant.image_url})">
		<div class="plantCardInfo m-2 p-2">
			<h3 class="card-title">${plant.common_name}</h3>
			<p class="card-subtitle fst-italic">${plant.scientific_name}</p>
		</div>
	</div>

	<!-- Modal for Plant 1 -->
	<div class="modal fade" id="exampleModal${idCount}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body d-flex flex-column pb-0">
					<img class="plant-photo" src="${plant.image_url}">
					<div class="plantCardInfo mt-2 mb-2 pt-2">
						<h3 class="card-title">${plant.common_name}</h3>
						<p class="card-subtitle fst-italic">${plant.scientific_name}</p>
						<div class="pt-4 card-text-body justify-content-center align-items-center">
							<div class="p-0 text-center row mt-2 mb-3">
								<h3 class="search-text text-center font-weight-bold">Want to learn more?</h3>
							</div>
							<div class="font-weight-light justify-content-between row text-center search-text mt-2 p-0">
								<div class="col-5">
									<p class="mb-0 font-weight-light row justify-content-center">Search with Google</p>
									<button type="button" class="btn google-button row">
									<a class="text-reset text-decoration-none" href="${plant.google_url}" alt="Search with Google">
										<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
											<path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
										</svg>
									</a>
								</button>
								</div>
								<div class="col-5">
									<p class="mb-0 font-weight-light row justify-content-center">Search with PlantNet</p>
									<button type="button" class="btn flower-button col-5">
										<a class="text-reset text-decoration-none" href="${plant.plantnet_url}" alt="Search on the PlantNet Database">
											<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
												<path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.888 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.303.248 17 17 0 0 0-.661.629A61 61 0 0 0 10.04 6.77l-.102.111.147-.033a61 61 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a5 5 0 0 0 .367-.138zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027q-.014.03-.036.084a5 5 0 0 0-.102.283c-.078.233-.165.53-.258.875a61 61 0 0 0-.572 2.342l-.033.147.11-.102a61 61 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5 5 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366M14 9a1 1 0 0 0 0-2l-.03.002a5 5 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a5 5 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035q.108.045.283.103c.233.078.53.165.874.258a61 61 0 0 0 2.343.572l.147.033-.103-.111a61 61 0 0 0-1.666-1.742 17 17 0 0 0-.66-.629 5 5 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366m2.196-1.196.017.025a5 5 0 0 0 .248.303c.164.184.377.408.629.661A61 61 0 0 0 6.77 5.96l.111.102-.033-.147a61 61 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5 5 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
											</svg>
										</a>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer mt-0 justify-content-between">
					<button type="button" class="btn cart-button">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
							<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
						</svg>
					</button>
					<button type="button" class="btn next-button" data-bs-target="#exampleModal${idCount + 1}" data-bs-toggle="modal">
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
    `);
    plantsContainer.append(plantDiv);
		idCount += 1;
  });
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// document.addEventListener("DOMContentLoaded", function() {
// 	const button = document.getElementById("card-button");

// 	if (button) { // Check if button exists before adding event listener
// 			button.addEventListener("click", function() {
// 					fetchPlantsData('jsonfiles/ala.json')
// 							.then(data => {
// 									updatePlantsContent(data);
// 							})
// 							.catch(error => {
// 									console.error('Error loading plants data:', error);
// 							});
// 			});
// 	} else {
// 			console.error('Button not found.');
// 	}

// 	function fetchPlantsData(url) {
// 			return fetch(url)
// 					.then(response => {
// 							if (!response.ok) {
// 									throw new Error('Network response was not ok');
// 							}
// 							return response.json();
// 					});
// 	}

// 	function updatePlantsContent(data) {
// 			// Shuffle the data array
// 			shuffleArray(data);

// 			// Clear previous content
// 			const plantRow = document.getElementById('plant-row');
// 			plantRow.innerHTML = "";

// 			// Generate 10 random plants
// 			for (let i = 0; i < 9; i++) {
// 					const randomPlant = data[i];
// 					const cardClone = createPlantCard(randomPlant);
// 					plantRow.appendChild(cardClone);
// 			}
// 	}

// 	// Function to create a card for a plant
// 	function createPlantCard(plant) {
// 		const col = document.createElement('div');
// 		col.classList.add('col-md-4', 'col-sm-6', 'col-12', 'mb-4');

// 		const card = document.createElement('div');
// 		card.classList.add('card');

// 		const img = document.createElement('img');
// 		img.classList.add('card-img-top');
// 		img.src = plant.image_url;
// 		card.appendChild(img);

// 		const cardBody = document.createElement('div');
// 		cardBody.classList.add('card-body');
// 		card.appendChild(cardBody);

// 		const scientificName = document.createElement('h2');
// 		scientificName.classList.add('card-title', 'plant-scientific', 'font-weight-bold');
// 		scientificName.textContent = plant.scientific_name;
// 		cardBody.appendChild(scientificName);

// 		const commonName = document.createElement('p');
// 		commonName.classList.add('card-text', 'plant-common', 'font-weight-light');
// 		commonName.textContent = plant.common_name;
// 		cardBody.appendChild(commonName);

// 		const googleLink = document.createElement('p');
// 		googleLink.classList.add('card-text', 'plant-google-url');
// 		const glink = document.createElement('a');
// 		glink.href = plant.google_url;
// 		glink.target = '_blank';
// 		glink.textContent = 'Search on Google';
// 		googleLink.appendChild(link);
// 		cardBody.appendChild(googleLink);

// 		const plantnetLink = document.createElement('p');
// 		googleLink.classList.add('card-text', 'plant-plantnet-url');
// 		const plink = document.createElement('a');
// 		pink.href = plant.plantnet_url;
// 		plink.target = '_blank';
// 		plink.textContent = 'Search on Google';
// 		plantnetLink.appendChild(plink);
// 		cardBody.appendChild(plantnetLink);

// 		col.appendChild(card);
// 		return col;
// }
// 	// Function to shuffle an array (Fisher-Yates shuffle)
// 	function shuffleArray(array) {
// 			for (let i = array.length - 1; i > 0; i--) {
// 					const j = Math.floor(Math.random() * (i + 1));
// 					[array[i], array[j]] = [array[j], array[i]];
// 			}
// 	}
// });
