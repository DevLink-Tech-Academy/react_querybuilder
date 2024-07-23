// src/components/AddWhereClause.js
import React, { useState } from 'react';
import components from './index'; // Import components dynamically

const AddWhereClause = ({ onAddCondition, availableColumns }) => {
  const [conditions, setConditions] = useState([{ column: '', operator: '=', value: '', isSubQuery: false }]);
  const [logicOperator, setLogicOperator] = useState('AND');
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleAddCondition = () => {
    const conditionStrings = conditions.map(condition => {
      if (condition.isSubQuery) {
        return `${condition.column} ${condition.operator} (${condition.value})`;
      }
      if (condition.operator === 'between' || condition.operator === 'not between') {
        const [value1, value2] = condition.value.split(',');
        return `${condition.column} ${condition.operator.toUpperCase()} ${value1.trim()} AND ${value2.trim()}`;
      }
      return `${condition.column} ${condition.operator} ${condition.value}`;
    });
    const conditionString = conditionStrings.join(` ${logicOperator} `);
    onAddCondition(conditionString);
    setConditions([{ column: '', operator: '=', value: '', isSubQuery: false }]);
  };

  const handleConditionChange = (index, field, value) => {
    const newConditions = [...conditions];
    newConditions[index][field] = value;
    setConditions(newConditions);
  };

  const handleToggleSubQuery = (index) => {
    const newConditions = [...conditions];
    newConditions[index].isSubQuery = !newConditions[index].isSubQuery;
    setConditions(newConditions);
  };

  const addConditionField = () => {
    setConditions([...conditions, { column: '', operator: '=', value: '', isSubQuery: false }]);
  };

  const handleAddOperation = (index, value) => {
    handleConditionChange(index, 'value', value);
  };

  return (
    <div className="add-where-clause p-4 mb-4 border rounded bg-white">
      <h3 className="text-lg font-bold mb-2">Add Where Clause</h3>
      {conditions.map((condition, index) => (
        <div key={index} className="flex items-center mb-2">
          <select
            value={condition.column}
            onChange={(e) => handleConditionChange(index, 'column', e.target.value)}
            className="border p-2 mr-2 flex-grow rounded"
          >
            <option value="">Select Column</option>
            {availableColumns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
          <select
            value={condition.operator}
            onChange={(e) => handleConditionChange(index, 'operator', e.target.value)}
            className="border p-2 mr-2 rounded"
          >
            <option value="=">=</option>
            <option value="!=">!=</option>
            <option value="<">&lt;</option>
            <option value=">">&gt;</option>
            <option value="<=">&lt;=</option>
            <option value=">=">&gt;=</option>
            <option value="contains">contains</option>
            <option value="beginsWith">begins with</option>
            <option value="endsWith">ends with</option>
            <option value="doesNotContain">does not contain</option>
            <option value="doesNotBeginWith">does not begin with</option>
            <option value="doesNotEndWith">does not end with</option>
            <option value="null">is null</option>
            <option value="notNull">is not null</option>
            <option value="in">in</option>
            <option value="notIn">not in</option>
            <option value="between">between</option>
            <option value="notBetween">not between</option>
          </select>
          <input
            type="text"
            value={condition.value}
            onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
            placeholder={condition.isSubQuery ? "Subquery" : "Value"}
            className="border p-2 flex-grow rounded"
          />
          <button
            onClick={() => handleToggleSubQuery(index)}
            className={`ml-2 px-2 py-1 rounded ${condition.isSubQuery ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}
          >
            {condition.isSubQuery ? 'Subquery' : 'Value'}
          </button>
          <select
            onChange={(e) => setSelectedComponent(e.target.value)}
            className="border p-2 ml-2 flex-grow rounded"
          >
            <option value="">Select Function</option>
            {Object.keys(components).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
          {selectedComponent && React.createElement(components[selectedComponent], {
            onAddOperation: (val) => handleAddOperation(index, val)
          })}
        </div>
      ))}
      <div className="flex items-center mb-2">
        <select
          value={logicOperator}
          onChange={(e) => setLogicOperator(e.target.value)}
          className="border p-2 mr-2 rounded"
        >
          <option value="AND">AND</option>
          <option value="OR">OR</option>
        </select>
      </div>
      <button onClick={addConditionField} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">
        Add Another Condition
      </button>
      <button onClick={handleAddCondition} className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Where Clause
      </button>
    </div>
  );
};

export default AddWhereClause;
