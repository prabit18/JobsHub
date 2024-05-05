import React, { useState } from 'react';

const SingleSelectDropdown = () => {
  // Initialize state to track the selected option
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle changes in the dropdown selection
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="options">Choose an option:</label>
      <select id="options" value={selectedOption} onChange={handleChange}>
        <option value="" disabled>
          -- Select an option --
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {selectedOption && (
        <p>You selected: {selectedOption}</p> // Display the selected value
      )}
    </div>
  );
};

export default SingleSelectDropdown;
