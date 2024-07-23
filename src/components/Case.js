import React, { useState } from 'react';

const Case = ({ onAddOperation }) => {
  const [conditions, setConditions] = useState('');
  const [results, setResults] = useState('');
  const [elseResult, setElseResult] = useState('');

  const handleAdd = () => {
    if (conditions && results && elseResult) {
      const operation = `CASE ${conditions.split(',').map((cond, index) => `WHEN ${cond} THEN ${results.split(',')[index]}`).join(' ')} ELSE ${elseResult} END`;
      onAddOperation(operation);
      setConditions('');
      setResults('');
      setElseResult('');
    }
  };

  return (
    <div>
      <h3>Case (case)</h3>
      <input
        type="text"
        placeholder="Conditions (comma separated)"
        value={conditions}
        onChange={(e) => setConditions(e.target.value)}
      />
      <input
        type="text"
        placeholder="Results (comma separated)"
        value={results}
        onChange={(e) => setResults(e.target.value)}
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

export default Case;
