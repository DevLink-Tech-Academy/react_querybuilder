import React, { useState } from 'react';

const Sum = ({ onAddOperation }) => {
  const [column, setColumn] = useState('');
  const [alias, setAlias] = useState('');

  const handleAdd = () => {
    if (column && alias) {
      const operation = `SUM(${column}) AS ${alias}`;
      onAddOperation(operation);
      setColumn('');
      setAlias('');
    }
  };

  return (
    <div>
      <h3>Sum (sum)</h3>
      <input
        type="text"
        placeholder="Column"
        value={column}
        onChange={(e) => setColumn(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Alias"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </div>
  );
};

export default Sum;
