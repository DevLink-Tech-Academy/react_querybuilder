
import React, { useState } from 'react';

const BitwiseNot = ({ onAddOperation }) => {
  const [operand, setOperand] = useState('');

  const handleAdd = () => {
    if (operand) {
      const operation = `~${operand}`;
      onAddOperation(operation);
      setOperand('');
    }
  };

  return (
    <div>
      <h3>Bitwise NOT (~)</h3>
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

export default BitwiseNot;
