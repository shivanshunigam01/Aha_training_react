import React from 'react';

const FizzBuzzComponent = ({ number, showFizzBuzz }) => {
  const generateFizzBuzzList = () => {
    const list = [];
    for (let i = 1; i <= number; i++) {
      let item = i;
      let style = {}; // Inline CSS style object

      if (showFizzBuzz) {
        if (i % 3 === 0 && i % 5 === 0) {
          item = 'BUzzFizz';
          style = { color: 'red' }; 
        } else if (i % 3 === 0) {
          item = 'Fizz';
          style = { color: 'red' }; 
        } else if (i % 5 === 0) {
          item = 'Buzz';
          style = { color: 'green' }; 
        }
      }
      else{
        if (i % 3 === 0 && i % 5 === 0) {
          item = 'FizzBuzz';
        } else if (i % 3 === 0) {
          item = 'Fizz';
        } else if (i % 5 === 0) {
          item = 'Buzz';
        }
      }

      list.push({ item, style });
    }
    return list;
  };

  return (
    <div>
      <ul>
        {generateFizzBuzzList().map((item, index) => (
          <li key={index} style={showFizzBuzz ? item.style : {}}>{item.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FizzBuzzComponent;