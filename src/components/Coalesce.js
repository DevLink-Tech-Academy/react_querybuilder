import React, { useState } from 'react';

const Coalesce = ({ onAddOperation }) => {
  const [columns, setColumns] = useState('');

  const handleAdd = () => {
    if (columns) {
      const operation = `coalesce(${columns.split(',').join(', ')})`;
      onAddOperation(operation);
      setColumns('');
    }
  };

  return (
    <div>
      <h3>Coalesce (coalesce)</h3>
      <input
        type="text"
        placeholder="Columns (comma separated)"
        value={columns}
        onChange={(e) => setColumns(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Coalesce;
