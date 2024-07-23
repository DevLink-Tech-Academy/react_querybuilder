// src/components/ConditionBuilder.js
import React, { useState } from 'react';

const ConditionBuilder = ({ onAddCondition }) => {
  const [field, setField] = useState('');
  const [operator, setOperator] = useState('');
  const [value, setValue] = useState('');

  const handleAddCondition = () => {
    onAddCondition({ field, operator, value });
    setField('');
    setOperator('');
    setValue('');
  };

  return (
    <div>
      <h3>Build Condition</h3>
      <input
        type="text"
        placeholder="Field"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <input
        type="text"
        placeholder="Operator"
        value={operator}
        onChange={(e) => setOperator(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAddCondition}>Add Condition</button>
    </div>
  );
};

export default ConditionBuilder;
