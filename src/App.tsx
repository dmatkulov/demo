import Person from "./Person/Person";
import './App.css';
import {useState} from "react";

interface Person {
  name: string;
  age: number;
  hobby: string;
}

function App() {
  const [people, setPeople] = useState<Person[]>([
    {name: 'Jane', age: 28, hobby: 'Video games'},
    {name: 'John', age: 30, hobby: 'Knitting'},
  ]);

  const changeName = () => {
    setPeople([
      {name: 'Jane Doe', age: 28, hobby: 'Video games'},
      {name: 'John Doe', age: 30, hobby: 'Knitting'},
    ]);
  };

  return (
    <div className="App">
      <Person name={people[0].name} age={people[0].age}>
        <strong>Hobby: </strong>{people[0].hobby}
      </Person>
      <Person name={people[1].name} age={people[1].age}>
        <strong>Hobby: </strong>{people[1].hobby}
      </Person>
      <div>
        <button onClick={changeName}>Change name</button>
      </div>
    </div>
  )
}

export default App
