import React, { useState } from 'react';

const InputComponent = ({ onNumberChange }) => {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleButtonClick = () => {
    onNumberChange(number);
  };

  return (
    <div>
      <input type="number" value={number} onChange={handleChange} />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default InputComponent;
