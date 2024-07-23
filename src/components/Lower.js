
import React, { useState } from 'react';

const Lower = ({ onAddOperation }) => {
  const [string, setString] = useState('');

  const handleAdd = () => {
    if (string) {
      const operation = `LOWER(${string})`;
      onAddOperation(operation);
      setString('');
    }
  };

  return (
    <div>
      <h3>Lower (lower)</h3>
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

export default Lower;
