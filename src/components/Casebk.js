import React, { useState } from 'react';

import NestedFunctionSelector from './NestedFunctionSelector';

const Case = ({ onAddOperation, availableFunctions }) => {
  const [conditions, setConditions] = useState(['']);
  const [results, setResults] = useState(['']);
  const [elseResult, setElseResult] = useState('');
  const [nestedConditionIndex, setNestedConditionIndex] = useState(null);
  const [nestedResultIndex, setNestedResultIndex] = useState(null);

  const handleAdd = () => {
    if (conditions.length > 0 && results.length > 0 && elseResult) {
      const operation = `CASE ${conditions.map((cond, index) => `WHEN ${cond} THEN ${results[index]}`).join(' ')} ELSE ${elseResult} END`;
      onAddOperation(operation);
      setConditions(['']);
      setResults(['']);
      setElseResult('');
    }
  };

  const handleConditionChange = (index, value) => {
    const newConditions = [...conditions];
    newConditions[index] = value;
    setConditions(newConditions);
  };

  const handleResultChange = (index, value) => {
    const newResults = [...results];
    newResults[index] = value;
    setResults(newResults);
  };

  const addConditionResultPair = () => {
    setConditions([...conditions, '']);
    setResults([...results, '']);
  };

  const handleNestedConditionAdd = (operation) => {
    handleConditionChange(nestedConditionIndex, operation);
    setNestedConditionIndex(null);
  };

  const handleNestedResultAdd = (operation) => {
    handleResultChange(nestedResultIndex, operation);
    setNestedResultIndex(null);
  };

  return (
    <div>
      <h3>Case (case)</h3>
      {conditions.map((condition, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            placeholder="Condition"
            value={condition}
            onChange={(e) => handleConditionChange(index, e.target.value)}
            className="border p-2 mr-2"
          />
          {/* <button onClick={() => setNestedConditionIndex(index)} className="bg-gray-500 text-white px-2 py-1 rounded">
            Add Nested Condition
          </button> */}
          <input
            type="text"
            placeholder="Result"
            value={results[index]}
            onChange={(e) => handleResultChange(index, e.target.value)}
            className="border p-2 ml-2"
          />
          {/* <button onClick={() => setNestedResultIndex(index)} className="bg-gray-500 text-white px-2 py-1 rounded">
            Add Nested Result
          </button> */}
        </div>
      ))}
      <input
        type="text"
        placeholder="Else Result"
        value={elseResult}
        onChange={(e) => setElseResult(e.target.value)}
        className="border p-2 mb-2"
      />
      <button onClick={addConditionResultPair} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
        Add Condition/Result Pair
      </button>
      <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-2 rounded">
        Add Case
      </button>
      {nestedConditionIndex !== null && (
        <NestedFunctionSelector
          availableFunctions={availableFunctions}
          onAddNestedFunction={handleNestedConditionAdd}
        />
      )}
      {nestedResultIndex !== null && (
        <NestedFunctionSelector
          availableFunctions={availableFunctions}
          onAddNestedFunction={handleNestedResultAdd}
        />
      )}
    </div>
  );
};

export default Case;
