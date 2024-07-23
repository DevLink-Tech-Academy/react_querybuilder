import React, { useState } from 'react';

const FromJson = ({ onAddOperation }) => {
  const [jsonString, setJsonString] = useState('');
  const [schema, setSchema] = useState('');

  const handleAdd = () => {
    if (jsonString && schema) {
      const operation = `from_json(${jsonString}, ${schema})`;
      onAddOperation(operation);
      setJsonString('');
      setSchema('');
    }
  };

  return (
    <div>
      <h3>From JSON (from_json)</h3>
      <input
        type="text"
        placeholder="JSON String"
        value={jsonString}
        onChange={(e) => setJsonString(e.target.value)}
      />
      <input
        type="text"
        placeholder="Schema"
        value={schema}
        onChange={(e) => setSchema(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default FromJson;
