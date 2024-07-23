import React, { useState } from 'react';

const ArrayIntersection = ({ onAddOperation }) => {
  const [array1, setArray1] = useState('');
  const [array2, setArray2] = useState('');

  const handleAdd = () => {
    if (array1 && array2) {
      const operation = `array_intersect(${array1}, ${array2})`;
      onAddOperation(operation);
      setArray1('');
      setArray2('');
    }
  };

  return (
    <div>
      <h3>Array Intersection (array_intersect)</h3>
      <input
        type="text"
        placeholder="Array 1"
        value={array1}
        onChange={(e) => setArray1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Array 2"
        value={array2}
        onChange={(e) => setArray2(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ArrayIntersection;
