
import React, { useState } from 'react';

const Average = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');

  const handleAdd = () => {
    if (column) {
      const operation = `AVG(${column})`;
      onAddOperation(operation);
      setColumn('');
    }
  };

  return (
    <div>
      <h3>Average (avg)</h3>
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

export default Average;
