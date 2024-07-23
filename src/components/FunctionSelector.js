// src/components/FunctionSelector.js
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'SUM', label: 'SUM' },
  { value: 'AVG', label: 'AVG' },
  { value: 'MIN', label: 'MIN' },
  { value: 'MAX', label: 'MAX' },
  { value: 'COUNT', label: 'COUNT' },
  { value: 'STDDEV', label: 'STDDEV' },
  { value: 'VARIANCE', label: 'VARIANCE' },
  { value: 'MEDIAN', label: 'MEDIAN' },
  { value: 'PERCENTILE_CONT', label: 'PERCENTILE_CONT' },
  { value: 'GROUP_CONCAT', label: 'GROUP_CONCAT' },
  { value: 'MODE', label: 'MODE' },
  // Add more functions as needed
];

const FunctionSelector = ({ onAddFunction }) => {
  const [selectedFunction, setSelectedFunction] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedFunction(selectedOption);
    onAddFunction(selectedOption.value);
  };

  return (
    <div>
      <h3>Select Function</h3>
      <Select options={options} onChange={handleChange} value={selectedFunction} />
    </div>
  );
};

export default FunctionSelector;
