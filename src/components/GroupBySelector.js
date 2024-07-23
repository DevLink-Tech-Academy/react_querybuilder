// src/components/GroupBySelector.js
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'transaction_date', label: 'Transaction Date' },
  { value: 'msisdn', label: 'MSISDN' },
  { value: 'instruct_to_accnt_hldr_msisdn', label: 'Instruct To Account Holder MSISDN' },
  // Add more fields as needed
];

const GroupBySelector = ({ onAddGroupBy }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedGroup(selectedOption);
    onAddGroupBy(selectedOption.value);
  };

  return (
    <div>
      <h3>Select Group By</h3>
      <Select options={options} onChange={handleChange} value={selectedGroup} />
    </div>
  );
};

export default GroupBySelector;
