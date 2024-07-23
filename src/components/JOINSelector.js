// src/components/JOINSelector.js
import React, { useState } from 'react';
import Select from 'react-select';

const joinOptions = [
  { value: 'INNER JOIN', label: 'INNER JOIN' },
  { value: 'LEFT JOIN', label: 'LEFT JOIN' },
  { value: 'RIGHT JOIN', label: 'RIGHT JOIN' },
  { value: 'FULL JOIN', label: 'FULL JOIN' },
  // Add more options as needed
];

const JOINSelector = ({ onAddJoin }) => {
  const [selectedJoin, setSelectedJoin] = useState(null);
  const [table, setTable] = useState('');
  const [onCondition, setOnCondition] = useState('');

  const handleChange = (selectedOption) => {
    setSelectedJoin(selectedOption);
    onAddJoin({ joinType: selectedOption.value, table, onCondition });
  };

  return (
    <div>
      <h3>Select JOIN Type</h3>
      <Select options={joinOptions} onChange={handleChange} value={selectedJoin} />
      <input
        type="text"
        placeholder="Table"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />
      <input
        type="text"
        placeholder="ON Condition"
        value={onCondition}
        onChange={(e) => setOnCondition(e.target.value)}
      />
    </div>
  );
};

export default JOINSelector;
