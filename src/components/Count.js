
import React, { useState } from 'react';

const Count = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');

  const handleAdd = () => {
    if (column) {
      const operation = `COUNT(${column})`;
      onAddOperation(operation);
      setColumn('');
    }
  };

  return (
    <div>
      <h3>Count (count)</h3>
      <input
        type="text"
        placeholder="Column"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Count;
