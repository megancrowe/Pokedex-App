let pokemonRepo = (function () {
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

    //function to show details of list item
    function showDetails (pokemon) {
      console.log(pokemon);
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
    pokemon-button.addEventListener('click', function showDetails(pokemon) {
    });
  };


  //function to add Pokemon to repo
  function addPokemon (item) {
    if(typeof item === ""){
    alert ("Please enter a pokemon");
    }
    else repo.push(item);
  }

  //function to return all Pokemon in repo
  function getAll () {
    return repo;
  }

  //instructions for what to return when called
  return {
    getAll: getAll,
    addPokemon: addPokemon,
    addListItem: addListItem,
  }
}());


pokemonRepo.getAll().forEach(function(pokemon) {  
  pokemonRepo.addListItem(pokemon);
});

/*
  document.write(pokemon.name + ': height = ' + pokemon.height + ' cm; '+ 'speed = ' + pokemon.speed + '');
    //conditional comment on pokemon of speed 100 or greater
    if (pokemon.speed >= 100) {
      document.write(' - wow, that\'s fast!</br>');
    }
    else {
      document.write('</br>')
    }
});
*/
