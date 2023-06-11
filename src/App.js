import './App.css';
import {logDOM} from "@testing-library/react";

function App() {
    const harryPotterCharacters = {
        harryPotter: {
            name: 'Harry Potter',
            age: 17,
            house: 'Gryffindor',
            pet: {
                name: 'Hedwig',
                type: 'Owl',
                color: 'White'
            }
        },
        hermioneGranger: {
            name: 'Hermione Granger',
            age: 17,
            house: 'Gryffindor',
            pet: {
                name: 'Crookshanks',
                type: 'Cat',
                color: 'Ginger'
            }
        },
        ronWeasley: {
            name: 'Ron Weasley',
            age: 17,
            house: 'Gryffindor',
            pet: {
                name: 'Scabbers',
                type: 'Rat',
                color: 'Gray'
            }
        },
        dracoMalfoy: {
            name: 'Draco Malfoy',
            age: 17,
            house: 'Slytherin',
            pet: {
                name: 'Astronomy',
                type: 'Snake',
                color: 'Green'
            }
        }
    }
    for (let key in harryPotterCharacters) {
        const home = harryPotterCharacters[key].name + " " + harryPotterCharacters[key].house
        const home1 = harryPotterCharacters[key].name + " " + harryPotterCharacters[key].age
    }

  return (
    <div className="App">

    </div>
  );
}

export default App;
