import Person from './Person/Person';
import './App.css';
import React, {useState} from 'react';

interface Person {
  id: number;
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [people, setPeople] = useState<Person[]>([
    {name: 'Jane', age: 28, hobby: 'Video games', id: 1},
    {name: 'John', age: 30, hobby: 'Knitting', id: 2},
    {name: 'Jack', age: 30, hobby: 'Knitting', id: 3},
    {name: 'Jim', age: 30, hobby: 'Knitting',id: 4},
  ]);

  const [showPeople, setShowPeople] = useState(true);

  const changeName = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newName = event.target.value;

    setPeople((prevState) => prevState.map((person) => {
        if (person.id === id) {
          return {...person, name: newName};
        }
        return person;
      }));
  };
  const changeAge = () => {
    setPeople((prevState) => prevState.map(person => {
      return {...person, age: person.age + 1};
    }));
  };


  const increaseAge = (id: number) => {
    setPeople((prevState) => prevState.map((person) => {
      if (person.id === id) {
        return {...person, age: person.age + 1};
      }
      return person;
    }));
  };

  const togglePeople = () => {
    setShowPeople((prevState) => !prevState);
  };

  const deletePerson = (id: number) => {
    setPeople((prevState) => prevState.filter(person => {
      return person.id !== id;
    }));
  };

  const addPerson = () => {
    setPeople((prevState) => {
      const id = prevState[prevState.length - 1].id + 1;
      return [...prevState, {name: 'Me', age: 33, hobby: 'Nothing', id}];
    });
  };

  let peopleList: React.ReactNode = null;

  if (showPeople) {
    peopleList = people.map((person) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          onNameClick={() => increaseAge(person.id)}
          onNameChange={(event) => changeName(event, person.id)}
          onDelete={() => deletePerson(person.id)}
        >
          <strong>Hobby: </strong>{person.hobby}
        </Person>
      );
    });
  }

  return (
    <div className="App">
      {peopleList}
      <div>
        <button onClick={changeAge}>Change age</button>
        <button onClick={togglePeople}>Toggle people</button>
        <button onClick={addPerson}>Add Person</button>
      </div>
    </div>
  );
}

export default App;
