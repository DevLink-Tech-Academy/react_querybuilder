
import React, { useState } from 'react';

const Upper = ({ onAddOperation }) => {
  const [string, setString] = useState('');

  const handleAdd = () => {
    if (string) {
      const operation = `UPPER(${string})`;
      onAddOperation(operation);
      setString('');
    }
  };

  return (
    <div>
      <h3>Upper (upper)</h3>
      <input
        type="text"
        placeholder="String"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Upper;
