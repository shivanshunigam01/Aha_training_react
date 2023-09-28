import React, { useState } from "react";

const UserInput = ({ onUserInput }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    const newListSize = parseInt(inputValue, 10);
    if (!isNaN(newListSize) && newListSize > 0) {
      onUserInput(newListSize);
    } else {
      alert("Please enter a valid positive number.");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Click</button>
    </div>
  );
};

export default UserInput;
