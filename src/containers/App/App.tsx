import React, {useState} from 'react';
import type {Character} from '../../types';
import './App.css';
import People from '../../components/People/People.tsx';
import Counter from '../../components/Counter/counter.tsx';
import ToggleButton from '../../components/ToggleButton/ToggleButton.tsx';


function App() {
  const [people, setPeople] = useState<Character[]>([
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
      const lastElement = prevState[prevState.length - 1];
      const id = lastElement ? lastElement.id + 1 : 1;
      return [...prevState, {name: 'Me', age: 33, hobby: 'Nothing', id}];
    });
  };

  let peopleList: React.ReactNode = null;

  if (showPeople) {
    peopleList = (
      <People
        people={people}
        increaseAge={increaseAge}
        changeName={changeName}
        removePerson={deletePerson}
      ></People>
    );
  }


  return (
    <div className="App">
      <ToggleButton isActive={showPeople} onClick={togglePeople}>Toggle button</ToggleButton>
      <Counter peopleCount={people.length}/>
      {peopleList}
      <div>
        <button onClick={changeAge}>Change age</button>
        <button onClick={addPerson}>Add Person</button>
      </div>
    </div>
  );
}

export default App;
