
import React, { useState } from 'react';

const Length = ({ onAddOperation }) => {
  const [string, setString] = useState('');

  const handleAdd = () => {
    if (string) {
      const operation = `LENGTH(${string})`;
      onAddOperation(operation);
      setString('');
    }
  };

  return (
    <div>
      <h3>Length (length)</h3>
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

export default Length;
