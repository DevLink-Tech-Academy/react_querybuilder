// src/components/CaseBuilder.js
import React, { useState } from 'react';
import Select from 'react-select';

const CaseBuilder = ({ onAddCase }) => {
  const [caseClauses, setCaseClauses] = useState([]);
  const [conditions, setConditions] = useState('');
  const [result, setResult] = useState('');

  const handleAddCase = () => {
    if (conditions && result) {
      setCaseClauses([...caseClauses, { conditions, result }]);
      setConditions('');
      setResult('');
    }
  };

  const generateCaseClause = () => {
    return `
      CASE
      ${caseClauses.map(c => `WHEN ${c.conditions} THEN ${c.result}`).join('\n')}
      ELSE 'DEFAULT'
      END
    `;
  };

  return (
    <div>
      <h3>Build CASE Statement</h3>
      <input
        type="text"
        placeholder="Condition (e.g., msisdn = 'CFCD208495D5')"
        value={conditions}
        onChange={(e) => setConditions(e.target.value)}
      />
      <input
        type="text"
        placeholder="Result (e.g., 'Credit')"
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
      <button onClick={handleAddCase}>Add Case</button>
      <div>
        <h4>Current CASE Statement:</h4>
        <pre>{generateCaseClause()}</pre>
      </div>
    </div>
  );
};

export default CaseBuilder;
