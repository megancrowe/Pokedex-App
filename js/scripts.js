var pokemonRepo = (function () {
  var repo = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //function to add Pokemon to repo
  function add (pokemon) {
    if (typeof pokemon === 'object') {
      repo.push (pokemon);
    } else {
      console.log ('Pokemon is not correctly entered');
    }
  }

  //function to return all Pokemon in repo
  function getAll () {
    return repo;
  }  

  //function to add list item
  function addListItem (pokemon) {
    let pokemonList = document.querySelector('.pokemon-ul');
    let listPokemon = document.createElement('li');

    //create pokemon button
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');

    //append pokemon button to HTML
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    //event listener for button click
    button.addEventListener('click', function (event) {
      showModal(pokemon);
    });
  }

  //show loading message function
  function toggleLoadingMessage() {
    //search document for .loading-message class
    let loadingMessage = document.querySelector('.loading-message');

    //add selected class and append .loading message to selected
    loadingMessage.classList.toggle('selected')
  }

  /*
//hide loading message function() {
  function hideLoadingMessage () {
    //remove loading message from selected class
    loadingMessage.classList.remove('selected');
  }
  */
  
  //load list function
  function loadList() {
    toggleLoadingMessage ();
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      toggleLoadingMessage();
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      toggleLoadingMessage();
      console.error(e);
    })
  }

  //load details function
  function loadDetails(item) {
    toggleLoadingMessage ();
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      toggleLoadingMessage ();
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      toggleLoadingMessage ();
      console.error(e);
    });
  }

  //function to show details of list item
  function showModal (pokemon) {
    pokemonRepo.loadDetails(pokemon).then(function() {
      //search HTML for #model-container
      let modalContainer = document.querySelector('#modal-container');

      //create modal div
      let modal = document.createElement ('div');
      modal.classList.add ('modal');

      //create and activate close button 
      let closeButton = document.createElement ('button');
      closeButton.classList.add ('modal-close');
      closeButton.innerText ('back');
      closeButton.addEventListener ('click', hideModal);

      //create title for modal
      let modalTitle = document.createElement ('h1');
      modalTitle.innerText = title;

      //create content for modal
      let modalContent = createElement ('p');
      modalContent = text;

      //append modal and content to .is-visible class
      modal.appendChild (closeButton);
      modal.appendChild (modalTitle);
      modal.appendChild (modalContent);
      modalContainer.classList.add('is-visible');
      console.log(pokemon);
    });
  }

  //instructions for what to return when called
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
  }
})();
  
  pokemonRepo.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepo.getAll().forEach(function(pokemon){
      pokemonRepo.addListItem(pokemon);
    });
  });


  /*
console.log(pokemon.name + ': height = ' + pokemon.height + ' cm; '+ 'speed = ' + pokemon.speed + '');
//conditional comment on pokemon of speed 100 or greater
(if (pokemon.speed >= 100) {
  console.log(' - wow, that\'s fast!</br>');
}
else {
  document.write('</br>')
}
*/


/*
document.querySelector('.show-more').addEventListener('click', function () {
  document.querySelector('.additional-information')
    .classList.toggle('is-visible');
*/
