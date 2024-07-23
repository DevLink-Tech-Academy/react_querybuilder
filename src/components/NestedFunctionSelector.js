import React, { useState } from 'react';

const NestedFunctionSelector = ({ availableFunctions, onAddNestedFunction }) => {
  const [outerFunction, setOuterFunction] = useState('');
  const [innerFunctions, setInnerFunctions] = useState(['']);
  const [alias, setAlias] = useState('');

  const handleAddNestedFunction = () => {
    if (outerFunction && innerFunctions.every(f => f)) {
      const nestedFunction = `${outerFunction}(${innerFunctions.join(', ')}) AS ${alias}`;
      onAddNestedFunction(nestedFunction);
      setOuterFunction('');
      setInnerFunctions(['']);
      setAlias('');
    }
  };

  const handleInnerFunctionChange = (index, value) => {
    const newInnerFunctions = [...innerFunctions];
    newInnerFunctions[index] = value;
    setInnerFunctions(newInnerFunctions);
  };

  const addInnerFunctionField = () => {
    setInnerFunctions([...innerFunctions, '']);
  };

  return (
    <div className="nested-function-selector p-4 mb-4 border rounded">
      <h3 className="text-lg font-bold mb-2">Add Nested Function</h3>
      <div className="flex items-center mb-2">
        <select
          value={outerFunction}
          onChange={(e) => setOuterFunction(e.target.value)}
          className="border p-2 mr-2 flex-grow"
        >
          <option value="">Select Outer Function</option>
          {availableFunctions.map((func) => (
            <option key={func} value={func}>
              {func}
            </option>
          ))}
        </select>
      </div>
      {innerFunctions.map((innerFunc, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            value={innerFunc}
            onChange={(e) => handleInnerFunctionChange(index, e.target.value)}
            placeholder="Enter inner function or value"
            className="border p-2 mr-2 flex-grow"
          />
        </div>
      ))}
      <div className="flex items-center mb-2">
        <input
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="border p-2 mr-2 flex-grow"
        />
      </div>
      <button onClick={addInnerFunctionField} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
        Add Another Inner Function
      </button>
      <button onClick={handleAddNestedFunction} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Nested Function**
      </button>
    </div>
  );
};

export default NestedFunctionSelector;
