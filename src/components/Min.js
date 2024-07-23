
import React, { useState } from 'react';

const Min = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');

  const handleAdd = () => {
    if (column) {
      const operation = `MIN(${column})`;
      onAddOperation(operation);
      setColumn('');
    }
  };

  return (
    <div>
      <h3>Min (min)</h3>
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

export default Min;
