import React, { useState } from 'react';

const Ntile = ({ onAddOperation }) => {
  const [n, setN] = useState('');

  const handleAdd = () => {
    if (n) {
      const operation = `ntile(${n})`;
      onAddOperation(operation);
      setN('');
    }
  };

  return (
    <div>
      <h3>Ntile (ntile)</h3>
      <input
        type="text"
        placeholder="N"
        value={n}
        onChange={(e) => setN(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Ntile;
