import React, { useState } from 'react';

const ToJson = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');

  const handleAdd = () => {
    if (column) {
      const operation = `to_json(${column})`;
      onAddOperation(operation);
      setColumn('');
    }
  };

  return (
    <div>
      <h3>To JSON (to_json)</h3>
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

export default ToJson;
