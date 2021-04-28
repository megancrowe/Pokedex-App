var pokemonRepo = (function () {
  var repo = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //function to add Pokemon to repo
  function add (pokemon) {
    if (typeof pokemon === 'object') {
      repo.push (pokemon);
      console.log ('Pokemon has been added to Pokedex');
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
      showDetails(pokemon);
    });
  };

  //load list function
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //load details function
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  //function to show details of list item
  function showDetails (pokemon) {
    pokemonRepo.loadDetails(pokemon).then(function() {
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
    showDetails: showDetails,
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

/*  Old Repository Array
let repo = [
    {
      name: 'Ninetales',
      height: 100,
      type: ['Fire'],
      HP: 73,
      attack: 76,
      defense: 75,
      speed: 100,
    },
    {
      name: 'Cubone',
      height: 40,
      type: ['Ground'],
      HP: 50,
      attack: 50,
      defense: 95,
      speed: 35,
    },
    {
      name: 'Wobbuffet',
      height: 130,
      type: ['Psychic'],
      HP: 190,
      attack: 33,
      defense: 58,
      speed: 33,
    },
    {
      name: 'Taillow',
      height: 30,
      type: ['Flying', 'Normal'],
      HP: 40,
      attack: 55,
      defense: 30,
      speed: 85,
    }
  ]
  */
