import React, { useState } from 'react';

const Cast = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');
  const [type, setType] = useState('');

  const handleAdd = () => {
    if (column && type) {
      const operation = `cast(${column} AS ${type})`;
      onAddOperation(operation);
      setColumn('');
      setType('');
    }
  };

  return (
    <div>
      <h3>Cast (cast)</h3>
      <input
        type="text"
        placeholder="Column"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
      />
      <input
        type="text"
        placeholder="Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Cast;
