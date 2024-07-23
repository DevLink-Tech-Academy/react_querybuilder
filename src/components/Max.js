
import React, { useState } from 'react';

const Max = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');

  const handleAdd = () => {
    if (column) {
      const operation = `MAX(${column})`;
      onAddOperation(operation);
      setColumn('');
    }
  };

  return (
    <div>
      <h3>Max (max)</h3>
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

export default Max;
