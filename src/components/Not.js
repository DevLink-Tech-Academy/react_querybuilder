
import React, { useState } from 'react';

const Not = ({ onAddOperation }) => {
  const [operand, setOperand] = useState('');

  const handleAdd = () => {
    if (operand) {
      const operation = `NOT ${operand}`;
      onAddOperation(operation);
      setOperand('');
    }
  };

  return (
    <div>
      <h3>Not (NOT)</h3>
      <input
        type="text"
        placeholder="Operand"
        value={operand}
        onChange={(e) => setOperand(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Not;
