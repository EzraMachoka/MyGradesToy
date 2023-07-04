const apiUrl = 'http://localhost:3000';

// Fetch the list of animal names
const animalList = document.getElementById('animalList');
fetch(`${apiUrl}/characters`)
  .then(response => response.json())
  .then(charactersData => {
    charactersData.forEach(animal => {
      const listItem = document.createElement('li');
      listItem.textContent = animal.name;
      listItem.addEventListener('click', () => showAnimalDetails(animal));
      animalList.appendChild(listItem);
    });
  });

// Display animal details when clicked
function showAnimalDetails(animal) {
  const animalDetails = document.getElementById('animalDetails');
  animalDetails.innerHTML = `
    <h3>${animal.name}</h3>
    <img src="${animal.image}" alt="${animal.name}">
    <p>Votes: ${animal.votes}</p>
    <button onclick="addVote(${animal.id},${animal.votes})">Add Vote</button>
  `;
}

// Add a vote for the selected animal
function addVote(animalId,vote) {
  const selectedAnimal = {
    id: animalId,
    votes: vote+=1
  };

  fetch(`${apiUrl}/characters/${animalId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(selectedAnimal)
  })
    .then(response => response.json())
    .then(updatedAnimal => {
      const votesElement = document.querySelector('#animalDetails p');
      votesElement.textContent = `Votes: ${updatedAnimal.votes}`;
    });
}

// Reset votes to 0
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  fetch(`${apiUrl}/characters`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ votes: 0 })
  })
    .then(response => response.json())
    .then(charactersData => {
      const votesElements = document.querySelectorAll('#animalList li p');
      votesElements.forEach(element => {
        element.textContent = 'Votes: 0';
      });
    });
});

