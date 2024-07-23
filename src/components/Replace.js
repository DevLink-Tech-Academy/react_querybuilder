
import React, { useState } from 'react';

const Replace = ({ onAddOperation }) => {
  const [string, setString] = useState('');
  const [search, setSearch] = useState('');
  const [replace, setReplace] = useState('');

  const handleAdd = () => {
    if (string && search && replace) {
      const operation = `REPLACE(${string}, ${search}, ${replace})`;
      onAddOperation(operation);
      setString('');
      setSearch('');
      setReplace('');
    }
  };

  return (
    <div>
      <h3>Replace (replace)</h3>
      <input
        type="text"
        placeholder="String"
        value={string}
        onChange={(e) => setString(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Replace"
        value={replace}
        onChange={(e) => setReplace(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Replace;
