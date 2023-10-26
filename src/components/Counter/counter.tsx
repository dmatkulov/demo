import React from 'react';

interface Props {
  peopleCount: number;
}
const Counter: React.FC<Props> = ({peopleCount}) => {
  const counterStyle: React.CSSProperties = {color: 'green'};
  if (peopleCount <= 2) {
    counterStyle.color = 'red';
  }
  if (peopleCount <= 1) {
    counterStyle.fontWeight = 'bold';
  }

  return (
      <p style={counterStyle}>
        Total people: {peopleCount}
      </p>
  );
};

export default Counter;