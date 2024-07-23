import React, { useState } from 'react';

const ArrayFunction = ({ onAddOperation }) => {
  const [elements, setElements] = useState('');
  const [alias, setAlias] = useState('');

  const handleAdd = () => {
    if (elements) {
      const operation = `array(${elements.split(',').join(', ')})`;
      onAddOperation(operation);
      setElements('');
      setAlias('');
    }
  };

  return (
    <div>
      <h3>Array (array)</h3>
      <input
        type="text"
        placeholder="Elements (comma separated)"
        value={elements}
        onChange={(e) => setElements(e.target.value)}
      />

<input
        type="text"
        placeholder="Alias"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default ArrayFunction;
