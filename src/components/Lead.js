import React, { useState } from 'react';

const Lead = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');
  const [offset, setOffset] = useState('');

  const handleAdd = () => {
    if (column && offset) {
      const operation = `lead(${column}, ${offset})`;
      onAddOperation(operation);
      setColumn('');
      setOffset('');
    }
  };

  return (
    <div>
      <h3>Lead (lead)</h3>
      <input
        type="text"
        placeholder="Column"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
      />
      <input
        type="text"
        placeholder="Offset"
        value={offset}
        onChange={(e) => setOffset(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Lead;
