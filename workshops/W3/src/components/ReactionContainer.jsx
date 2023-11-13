import { Component  } from "react";
import Reaction from "./Reaction";
class ReactionContainter extends Component {

  constructor(){
    super();    //Vi måste alltid kalla på super-klassen

   
    //Här sakapar vi upp objektet "state" och skapar ett attribut (pokemonList) som är en tom vektor.
    this.state = {
      pokemonList: Array()
    }

    //Här kallar på method setDummy
    //Kom ihåg att vi måste använda "this" för att vi ska köra en metod i objektet (klassen) ReactionContainer
    this.setDummy();
  }

  //Metoden setDummy
  setDummy = () => {
    //Här så sätter vi attributet pokemonList i objektet "state" till en vektor med 3 objekt
    //Kom ihåg att inte använda setState() här! setState() kan ni enbart använda när klassen är skapad
    //I detta tillfälle är inte klassen skapad då konstruktorn är inte klar än.
    this.state.pokemonList = [
        {
            "id": 1,
            "name": "Bulbasaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
        },
        {
            "id": 2,
            "name": "Ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
        },

        {
            "id": 3,
            "name": "Venusaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"
        }
    ];

    //Här skapar vi ett nytt attribut i objektet "state" som heter dummyList
    //Vi använder denna när vi ska filterar pokemons
    this.state.dummyList = this.state.pokemonList;
  }

  
  //Metod för att filtrera pokemon beroende på vad som står i input-fältet
  filter = (e) => {
    //Hämtar ut texten i fältet. OBS. Vi sätter texten till lowerCase för att det ska vara lättare att söka
    let text = e.target.value.toLowerCase();

    //Vi skapar en lokal variabel som är samma som "pokemonList"
    let pokemons = this.state.pokemonList;

    //Vi skapar en variabel som heter search som är en vektor av alla pokemons efter man har filtrerat dem
    //Metoden filter kör igenom alla pokemons (som en for-loop) där "pokemon" är ett objekt.
      //Om texten i variabeln text är inkluderat på något sätt pokemon-objektets attribut "name" 
      //Då ska den läggas till i vektorn "search" 
      //T.ex. om jag skriver "Bu" så kommer den enbart hitta pokemon som har "Bu" i attributet "name"
    //Till sist blir search en vektor av alla pokemons som matchar med det vi skrev in
    let search = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(text));

    //Nu har klassen ReactionContainer skapats så vi kan använda setState()
    //i setState så tar den emot ett objekt och det är ett objekt av de attribut vi vill ändra på
    //Vi vill enbart ändra på dummyList eftersom om vi modiferade pokemonList så hade vi tagit bort original datan.
    //När vi använder setState() så kommer tillståndet av klassen uppdateras och render-metoden kommer att köras
    this.setState({
      dummyList: search
    });
  }

  //Här skapar vi upp sökrutan samt hela listan av alla pokemons
  render() {
    return (

        //Vanlig "HTML" kod
        //onChange kör metoden filter() varje gång man ändrar i input-fältet
        <div className="pokemon-container">
            <h1 className="pokemon-title">Pokemon list</h1>
            <div>
                <input type="text" onChange={this.filter} />
            </div>

          
            
            {
              //Detta är det svåra med React
              //Det vi gör först är att kontrollera om dummyList är lika med eller mindre än 0
                //Om detta är sant så skriver vi ut "<h2>No pokemons found!"</h2> i listan
              //Annars så ska vi loopa igenom alla pokemons
              //map-metoden loopar igenom alla pokemons i "dummyList"
                //Vi kan inte använda oss av for-loopar eller liknande i React och därför måste vi göra på detta sätt
                //Vid varje varv av loopen så kommer vi returnera en Reaction-tagg med flera attribut
                //Tänk på att ni måste ha ett "key"-attribut när ni skapar flera av samma komponent. Detta behövs då React måste veta vilken komponent som är vilken
              this.state.dummyList.length <= 0 ? (
                <h2>No Pokémons found!</h2>
              ) : (
                this.state.dummyList.map((item, index) => {
                  return <Reaction key={index} name={item.name} id={item.id} image={item.image + "/" + item.id + ".png"}/>
                })
              )

            }
        </div>
    );
  }
}

export default ReactionContainter;