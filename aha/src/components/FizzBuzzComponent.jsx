import React from 'react';

const FizzBuzzComponent = ({ number, showFizzBuzz }) => {
  const generateFizzBuzzList = () => {
    const list = [];
    for (let i = 1; i <= number; i++) {
      let item = i;
      if ((i % 3 === 0 && i % 5 === 0)&&showFizzBuzz) {
        item = 'FizzBuzz';
      } else if (i % 3 === 0 && showFizzBuzz) {
        item = 'Fizz';
      } else if (i % 5 === 0 && showFizzBuzz) {
        item = 'Buzz';
      }
      list.push(item);
    }
    return list;
  };

  return (
    <div>
      <ul>
        {generateFizzBuzzList().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FizzBuzzComponent;