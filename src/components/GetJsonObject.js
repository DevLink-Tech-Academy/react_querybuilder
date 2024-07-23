import React, { useState } from 'react';

const GetJsonObject = ({ onAddOperation }) => {
  const [jsonString, setJsonString] = useState('');
  const [path, setPath] = useState('');

  const handleAdd = () => {
    if (jsonString && path) {
      const operation = `get_json_object(${jsonString}, ${path})`;
      onAddOperation(operation);
      setJsonString('');
      setPath('');
    }
  };

  return (
    <div>
      <h3>Get JSON Object (get_json_object)</h3>
      <input
        type="text"
        placeholder="JSON String"
        value={jsonString}
        onChange={(e) => setJsonString(e.target.value)}
      />
      <input
        type="text"
        placeholder="Path"
        value={path}
        onChange={(e) => setPath(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default GetJsonObject;
