import React, { useState } from 'react';

const DisplayComponent = ({ onCheckboxChange }) => {
  const [show, setShow] = useState(false);
  
  const handleCheckboxChange = () => {
    setShow(!show);
    onCheckboxChange(!show);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={show} onChange={handleCheckboxChange} />
        Show Fizz and Buzz
      </label>
    </div>
  );
};

export default DisplayComponent;