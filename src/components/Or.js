
import React, { useState } from 'react';

const Or = ({ onAddOperation }) => {
  const [leftOperand, setLeftOperand] = useState('');
    const [rightOperand, setRightOperand] = useState('');
  const [alias, setAlias] = useState('');

  const handleAdd = () => {
    if (leftOperand && rightOperand) {
      const operation = `${leftOperand} OR ${rightOperand} AS ${alias}`;
      onAddOperation(operation);
      setLeftOperand('');
       setRightOperand('');
      setAlias('');
    }
  };

  return (
    <div>
      <h3>Or (OR)</h3>
      <input
        type="text"
        placeholder="Left Operand"
        value={leftOperand}
        onChange={(e) => setLeftOperand(e.target.value)}
      />
    <input
        type="text"
        placeholder="Right Operand"
        value={rightOperand}
        onChange={(e) => setRightOperand(e.target.value)}
      />
      <input
        type="text"
        placeholder="Alias"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Or;
