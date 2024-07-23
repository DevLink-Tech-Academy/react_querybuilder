
import React, { useState } from 'react';

const BitwiseShiftRight = ({ onAddOperation }) => {
  const [operand, setOperand] = useState('');
  const [shift, setShift] = useState('');

  const handleAdd = () => {
    if (operand && shift) {
      const operation = `${operand} >> ${shift}`;
      onAddOperation(operation);
      setOperand('');
      setShift('');
    }
  };

  return (
    <div>
      <h3>Bitwise Shift Right (>>)</h3>
      <input
        type="text"
        placeholder="Operand"
        value={operand}
        onChange={(e) => setOperand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Shift"
        value={shift}
        onChange={(e) => setShift(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default BitwiseShiftRight;
