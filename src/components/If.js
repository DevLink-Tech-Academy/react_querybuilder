import React, { useState } from 'react';

const If = ({ onAddOperation }) => {
  const [condition, setCondition] = useState('');
  const [trueResult, setTrueResult] = useState('');
  const [falseResult, setFalseResult] = useState('');

  const handleAdd = () => {
    if (condition && trueResult && falseResult) {
      const operation = `if(${condition}, ${trueResult}, ${falseResult})`;
      onAddOperation(operation);
      setCondition('');
      setTrueResult('');
      setFalseResult('');
    }
  };

  return (
    <div>
      <h3>If (if)</h3>
      <input
        type="text"
        placeholder="Condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />
      <input
        type="text"
        placeholder="True Result"
        value={trueResult}
        onChange={(e) => setTrueResult(e.target.value)}
      />
      <input
        type="text"
        placeholder="False Result"
        value={falseResult}
        onChange={(e) => setFalseResult(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default If;
