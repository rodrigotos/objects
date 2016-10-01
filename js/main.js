/* jshint esversion: 6 */
var Animal = function(
  //parameters
  numero_de_patas = 2,
  carnivoro = true,
  pelaje = true,
  numero_de_ojos = 2,
  nombre = null
){
  return {
    numero_de_patas: numero_de_patas,
    carnivoro: carnivoro,
    pelaje: pelaje,
    numero_de_ojos: numero_de_ojos,
    nombre: nombre,
    comer: function(){
      if(carnivoro === true)
      {
        return "Carnivoro";
      }else {
        return "No Carnivoro";
      }
    }
  };//return
};//Animal()

var Pokemon = function(tipo = null, poder = 0, energia = 0, fuerza = 0){
  var pokemon = Object.create(new Animal());
  pokemon.tipo = tipo;
  pokemon.poder = poder;
  pokemon.energia = energia;
  pokemon.fuerza = fuerza;
  pokemon.atacar = function(){
    if(energia/fuerza < 1){
      return "Ganó";
    }else {
      return "Perdió";
    }
  };//atacar()
  return pokemon;
};//Pokemon()


var jirafa = new Animal(4, false, true, 2, "Jirafa");
console.log(jirafa);
