// src/components/FieldSelector.js
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'transaction_date', label: 'Transaction Date' },
  { value: 'msisdn', label: 'MSISDN' },
  { value: 'instruct_amount', label: 'Instruct Amount' },
  // Add more fields as needed
];

const FieldSelector = ({ onAddField }) => {
  const [selectedField, setSelectedField] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedField(selectedOption);
    onAddField(selectedOption.value);
  };

  return (
    <div>
      <h3>Select Field</h3>
      <Select options={options} onChange={handleChange} value={selectedField} />
    </div>
  );
};

export default FieldSelector;
