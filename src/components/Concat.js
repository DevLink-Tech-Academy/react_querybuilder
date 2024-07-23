
import React, { useState } from 'react';

const Concat = ({ onAddOperation }) => {
  const [leftString, setLeftString] = useState('');
  const [rightString, setRightString] = useState('');

  const handleAdd = () => {
    if (leftString && rightString) {
      const operation = `CONCAT(${leftString}, ${rightString})`;
      onAddOperation(operation);
      setLeftString('');
      setRightString('');
    }
  };

  return (
    <div>
      <h3>Concat (concat)</h3>
      <input
        type="text"
        placeholder="Left String"
        value={leftString}
        onChange={(e) => setLeftString(e.target.value)}
      />
      <input
        type="text"
        placeholder="Right String"
        value={rightString}
        onChange={(e) => setRightString(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Concat;
