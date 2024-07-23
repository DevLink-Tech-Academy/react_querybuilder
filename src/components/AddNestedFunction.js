import React, { useState } from 'react';
import components from './index'; // Import components dynamically

const AddNestedFunction = ({ onAddNestedFunction, availableFunctions }) => {
  const [outerFunction, setOuterFunction] = useState('');
  const [innerFunctions, setInnerFunctions] = useState([{ component: '', value: '' }]);
  const [alias, setAlias] = useState('');

  const handleAddNestedFunction = () => {
    if (outerFunction && innerFunctions.every(f => f.component && f.value) && alias) {
      const nestedFunction = `${outerFunction}(${innerFunctions.map(f => f.value).join(', ')}) AS ${alias}`;
      onAddNestedFunction(nestedFunction);
      setOuterFunction('');
      setInnerFunctions([{ component: '', value: '' }]);
      setAlias('');
    }
  };

  const handleInnerFunctionChange = (index, field, value) => {
    const newInnerFunctions = [...innerFunctions];
    newInnerFunctions[index][field] = value;
    setInnerFunctions(newInnerFunctions);
  };

  const addInnerFunctionField = () => {
    setInnerFunctions([...innerFunctions, { component: '', value: '' }]);
  };

  return (
    <div className="add-nested-function p-4 mb-4 border rounded">
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
          <select
            value={innerFunc.component}
            onChange={(e) => handleInnerFunctionChange(index, 'component', e.target.value)}
            className="border p-2 mr-2 flex-grow"
          >
            <option value="">Select Inner Function</option>
            {availableFunctions.map((func) => (
              <option key={func} value={func}>
                {func}
              </option>
            ))}
          </select>
          {innerFunc.component && (
            <div className="border p-2 mr-2 flex-grow">
              {React.createElement(components[innerFunc.component], {
                onAddOperation: (val) => handleInnerFunctionChange(index, 'value', val)
              })}
            </div>
          )}
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
        Add Nested Function
      </button>
    </div>
  );
};

export default AddNestedFunction;
