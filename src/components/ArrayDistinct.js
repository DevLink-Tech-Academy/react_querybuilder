import React, { useState } from 'react';

const ArrayDistinct = ({ onAddOperation }) => {
  const [array, setArray] = useState('');

  const handleAdd = () => {
    if (array) {
      const operation = `array_distinct(${array})`;
      onAddOperation(operation);
      setArray('');
    }
  };

  return (
    <div>
      <h3>Array Distinct (array_distinct)</h3>
      <input
        type="text"
        placeholder="Array"
        value={array}
        onChange={(e) => setArray(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ArrayDistinct;
