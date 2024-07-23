
import React, { useState } from 'react';

const Substring = ({ onAddOperation }) => {
  const [string, setString] = useState('');
  const [start, setStart] = useState('');
  const [length, setLength] = useState('');

  const handleAdd = () => {
    if (string && start && length) {
      const operation = `SUBSTRING(${string}, ${start}, ${length})`;
      onAddOperation(operation);
      setString('');
      setStart('');
      setLength('');
    }
  };

  return (
    <div>
      <h3>Substring (substr)</h3>
      <input
        type="text"
        placeholder="String"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <input
        type="text"
        placeholder="Start Position"
        value={start}
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="Length"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Substring;
