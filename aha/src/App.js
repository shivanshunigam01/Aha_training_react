import React, { useState } from 'react';
import InputComponent from './inputComponent';
import FizzBuzzComponent from './fizzBuzzComponent';
import DisplayComponent from './displayComponent';

function App() {
  const [number, setNumber] = useState(null);
  const [showFizzBuzz, setShowFizzBuzz] = useState(false);

  const handleNumberChange = (newNumber) => {
    setNumber(newNumber);
  };

  const handleCheckboxChange = (newValue) => {
    setShowFizzBuzz(newValue);
  };

  return (
    <div>
      <InputComponent onNumberChange={handleNumberChange} />
      <FizzBuzzComponent number={number} showFizzBuzz={showFizzBuzz} />
      <DisplayComponent onCheckboxChange={handleCheckboxChange} />
    </div>
  );
}

export default App;