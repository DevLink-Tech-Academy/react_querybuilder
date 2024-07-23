import React, { useState } from 'react';

const ArrayContains = ({ onAddOperation }) => {
  const [array, setArray] = useState('');
  const [value, setValue] = useState('');

  const handleAdd = () => {
    if (array && value) {
      const operation = `array_contains(${array}, ${value})`;
      onAddOperation(operation);
      setArray('');
      setValue('');
    }
  };

  return (
    <div>
      <h3>Array Contains (array_contains)</h3>
      <input
        type="text"
        placeholder="Array"
        value={array}
        onChange={(e) => setArray(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ArrayContains;
