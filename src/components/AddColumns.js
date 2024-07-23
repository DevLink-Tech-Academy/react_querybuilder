import React, { useState } from 'react';

const AddColumns = ({ onAddColumns }) => {
  const [columnName, setColumnName] = useState('');
  const [alias, setAlias] = useState('');
  const [columns, setColumns] = useState([]);

  const handleColumnNameChange = (e) => {
    setColumnName(e.target.value);
  };

  const handleAliasChange = (e) => {
    setAlias(e.target.value);
  };

  const handleAddColumn = () => {
    if (columnName.trim() !== '') {
      const column = alias.trim() !== '' ? `${columnName.trim()} AS ${alias.trim()}` : columnName.trim();
      setColumns((prevColumns) => [...prevColumns, column]);
      setColumnName('');
      setAlias('');
    }
  };

  const handleSaveColumns = () => {
    onAddColumns(columns);
    setColumns([]);
  };

  return (
    <div className="add-columns p-4 mb-4 border rounded">
      <h3 className="text-lg font-bold mb-2">Add Columns</h3>
      <div className="flex items-center mb-2">
        <input
          type="text"
          value={columnName}
          onChange={handleColumnNameChange}
          placeholder="Column Name"
          className="border p-2 mr-2 flex-grow"
        />
        <input
          type="text"
          value={alias}
          onChange={handleAliasChange}
          placeholder="Alias"
          className="border p-2 mr-2 flex-grow"
        />
        <button onClick={handleAddColumn} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Column
        </button>
      </div>
      <ul className="list-disc list-inside mb-2">
        {columns.map((col, index) => (
          <li key={index}>{col}</li>
        ))}
      </ul>
      <button onClick={handleSaveColumns} className="bg-green-500 text-white px-4 py-2 rounded">
        Save Columns
      </button>
    </div>
  );
};

export default AddColumns;
