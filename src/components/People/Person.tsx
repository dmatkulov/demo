import React from "react";

interface Props extends React.PropsWithChildren {
  name: string;
  age: number;
  onNameClick: React.MouseEventHandler;
  onNameChange?: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler;
}

const Person: React.FC<Props> = ({name, age, onDelete, onNameClick, onNameChange, children}) => {
  return (
    <div className="person">
      <h1 onClick={onNameClick}>{name}</h1>
      <p>Age: {age}</p>
      <p>{children}</p>
      <input value={name} onChange={onNameChange}/>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Person;