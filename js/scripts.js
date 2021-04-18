let pokemonRepo = (function () {
  let pokemon = ''
  let pokemonList = [
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
  function addPokemon (item) {
    if(typeof item === "object"){
      pokemonList.push(item);
    }
    else alert ("Please enter a valid Pokemon")
  }
  function getAll () {
    return pokemonList;
  }
  return {
    getAll: getAll,
    addPokemon: addPokemon,
  }
}());


//writes the names, heights and speeds of the objects in pokemonList array
pokemonRepo.getAll().forEach(function(pokemon) {  
  document.write(pokemon.name + ': height = ' + pokemon.height + ' cm; '+ 'speed = ' + pokemon.speed + '');
    //conditional comment on pokemon of speed 100 or greater
    if (pokemon.speed >= 100) {
      document.write(' - wow, that\'s fast!</br>');
    }
    else {
      document.write('</br>')
    }
});