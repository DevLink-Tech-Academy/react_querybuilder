import React, { useState } from 'react';

const CaseWhen = ({ onAddOperation }) => {
  const [condition, setCondition] = useState('');
  const [result, setResult] = useState('');
  const [elseResult, setElseResult] = useState('');

  const handleAdd = () => {
    if (condition && result && elseResult) {
      const operation = `CASE WHEN ${condition} THEN ${result} ELSE ${elseResult} END`;
      onAddOperation(operation);
      setCondition('');
      setResult('');
      setElseResult('');
    }
  };

  return (
    <div>
      <h3>Case When (case when ... then ... end)</h3>
      <input
        type="text"
        placeholder="Condition"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
      />
      <input
        type="text"
        placeholder="Result"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      <input
        type="text"
        placeholder="Else Result"
        value={elseResult}
        onChange={(e) => setElseResult(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default CaseWhen;
