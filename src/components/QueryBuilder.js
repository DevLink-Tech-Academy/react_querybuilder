// src/components/QueryBuilder.js
import React, { useState, useEffect } from 'react';
import { format } from 'sql-formatter';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import components from './index'; // Import components dynamically
import AddColumns from './AddColumns';
import AddNestedFunction from './AddNestedFunction';
import AddWhereClause from './AddWhereClause';

SyntaxHighlighter.registerLanguage('sql', sql);

const QueryBuilder = () => {
  const [query, setQuery] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('');
  const [columns, setColumns] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [tableName, setTableName] = useState('');
  const [editingColumnIndex, setEditingColumnIndex] = useState(null);
  const [previousQuery, setPreviousQuery] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [showColumns, setShowColumns] = useState(false);

  useEffect(() => {
    setPreviousQuery(query);
  }, []);

  useEffect(() => {
    formatSQLQuery(query);
  }, [query]);

  const handleAddOperation = (operation) => {
    setColumns((prev) => {
      const newColumns = [...prev, operation];
      generateQuery(newColumns, conditions);
      return newColumns;
    });
  };

  const handleAddNestedFunction = (nestedFunction) => {
    setColumns((prev) => {
      const newColumns = [...prev, nestedFunction];
      generateQuery(newColumns, conditions);
      return newColumns;
    });
  };

  const handleAddCondition = (condition) => {
    setConditions((prev) => {
      const newConditions = [...prev, condition];
      generateQuery(columns, newConditions);
      return newConditions;
    });
  };

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    const oldColumns = parseColumnsFromQuery(previousQuery);
    const newColumns = parseColumnsFromQuery(newQuery);

    const columnsToRemove = oldColumns.filter(col => !newColumns.includes(col));
    const updatedColumns = columns.filter(col => !columnsToRemove.includes(col.split(' AS ')[0]));

    setQuery(newQuery);
    setColumns(updatedColumns);
    setPreviousQuery(newQuery);
  };

  const parseColumnsFromQuery = (query) => {
    const selectPart = query.split(' FROM ')[0];
    const columnsPart = selectPart.replace('SELECT', '').trim();
    return columnsPart.split(',').map(col => col.trim());
  };

  const handleClearQuery = () => {
    setQuery('');
    setColumns([]);
    setConditions([]);
    setTableName('');
  };

  const handleSelectChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const handleTableNameChange = (e) => {
    const newTableName = e.target.value;
    setTableName(newTableName);
    generateQuery(columns, conditions, newTableName);
  };

  const handleColumnEdit = (index) => {
    setEditingColumnIndex(index);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
    generateQuery(newColumns, conditions);
  };

  const handleAliasChange = (index, value) => {
    const newColumns = [...columns];
    const columnParts = newColumns[index].split(' AS ');
    newColumns[index] = `${columnParts[0]} AS ${value}`;
    setColumns(newColumns);
    generateQuery(newColumns, conditions);
  };

  const handleRemoveColumn = (index) => {
    const newColumns = columns.filter((_, colIndex) => colIndex !== index);
    setColumns(newColumns);
    generateQuery(newColumns, conditions);
  };

  const handleRemoveCondition = (index) => {
    const newConditions = conditions.filter((_, condIndex) => condIndex !== index);
    setConditions(newConditions);
    generateQuery(columns, newConditions);
  };

  const generateQuery = (columnsList = columns, conditionsList = conditions, table = tableName) => {
    const selectClause = `SELECT ${columnsList.join(', ')}`;
    const fromClause = table ? ` FROM ${table}` : '';
    const whereClause = conditionsList.length > 0 ? ` WHERE ${conditionsList.join(' AND ')}` : '';
    const generatedQuery = `${selectClause}${fromClause}${whereClause}`;
    setQuery(generatedQuery);
    setPreviousQuery(generatedQuery);
  };

  const formatSQLQuery = (query) => {
    try {
      const formattedQuery = format(query, { language: 'postgresql' });
      setQuery(formattedQuery);
    } catch (error) {
      console.error('Error formatting query:', error);
    }
  };

  const validateSQLQuery = (query) => {
    const containsSelect = query.toUpperCase().includes('SELECT');
    const containsFrom = query.toUpperCase().includes('FROM');
    const endsWithComma = query.trim().endsWith(',');

    if (containsSelect && containsFrom && !endsWithComma) {
      setValidationMessage('Query is valid!');
    } else {
      setValidationMessage('Query is invalid! Ensure it contains SELECT and FROM, and does not end with a comma.');
    }
  };

  const extractAliasesFromQuery = () => {
    const selectPart = query.split(' FROM ')[0];
    const columnsPart = selectPart.replace('SELECT', '').trim();
    const extractedColumns = columnsPart.split(',').map(col => col.trim());
    const aliases = extractedColumns.map(col => {
      const parts = col.split(' AS ');
      if (parts.length > 1 && parts[1].includes('FROM')) {
        const newPart = parts[1].split(' FROM ');
        return newPart[0].trim();
      }
      return parts.length > 1 ? parts[1].trim() : parts[0].trim();
    });
    return aliases.filter(alias => alias && !alias.includes(`FROM ${tableName}`));
  };

  const handleValidateQuery = () => {
    validateSQLQuery(query);
  };

  const handleAddColumns = (newColumns) => {
    setColumns((prevColumns) => [...prevColumns, ...newColumns]);
    generateQuery([...columns, ...newColumns], conditions, tableName);
  };

  const SelectedComponent = components[selectedComponent] || null;
  const availableFunctions = Object.keys(components);

  return (
    <div className="query-builder p-4 max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg">
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Table Name</h3>
        <input
          type="text"
          placeholder="Table Name"
          value={tableName}
          onChange={handleTableNameChange}
          className="border p-2 w-full rounded"
        />
      </div>
      <AddColumns onAddColumns={handleAddColumns} />
      <AddNestedFunction onAddNestedFunction={handleAddNestedFunction} availableFunctions={availableFunctions} />
     
      <div className="mb-4">
        {columns.map((col, index) => (
          <div key={index} className="flex items-center mb-2">
            {editingColumnIndex === index ? (
              <>
                <input
                  type="text"
                  value={col.split(' AS ')[0]}
                  onChange={(e) => handleColumnChange(index, e.target.value)}
                  onBlur={() => setEditingColumnIndex(null)}
                  autoFocus
                  className="border p-2 mr-2 flex-grow rounded"
                />
                <input
                  type="text"
                  value={col.split(' AS ')[1] || ''}
                  onChange={(e) => handleAliasChange(index, e.target.value)}
                  onBlur={() => setEditingColumnIndex(null)}
                  className="border p-2 flex-grow rounded"
                />
              </>
            ) : (
              <span
                onClick={() => handleColumnEdit(index)}
                className="cursor-pointer mr-2 flex-grow"
              >
                {col}
              </span>
            )}
            <button
              onClick={() => handleRemoveColumn(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        {conditions.map((cond, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="cursor-pointer mr-2 flex-grow">{cond}</span>
            <button
              onClick={() => handleRemoveCondition(index)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <select
          onChange={handleSelectChange}
          value={selectedComponent}
          className="border p-2 w-full rounded"
        >
          <option value="">Select an Operator</option>
          {Object.keys(components).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        {SelectedComponent && <SelectedComponent onAddOperation={handleAddOperation} />}
      </div>

      <AddWhereClause onAddCondition={handleAddCondition} availableColumns={extractAliasesFromQuery()} />

      <textarea
        value={query}
        onChange={handleQueryChange}
        placeholder="Build your query here"
        rows="4"
        cols="50"
        className="border p-2 w-full mb-4 rounded"
      />
      {validationMessage && (
        <div className={`p-2 mb-4 ${validationMessage.includes('valid') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {validationMessage}
        </div>
      )}
      <SyntaxHighlighter language="sql" style={docco} className="border p-2 mb-4 rounded">
        {query}
      </SyntaxHighlighter>
      <div className="flex space-x-2">
        <button
          onClick={() => generateQuery()}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generate Query
        </button>
        <button
          onClick={handleClearQuery}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Clear Query
        </button>
        <button
          onClick={() => setShowColumns(true)}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          List Columns
        </button>
        <button
          onClick={handleValidateQuery}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Validate Query
        </button>
      </div>
      {showColumns && (
        <div className="bg-gray-100 p-4 mt-4 rounded">
          <h3 className="text-lg font-bold mb-2">Extracted Columns</h3>
          <ul className="list-disc list-inside">
            {extractAliasesFromQuery().map((alias, index) => (
              <li key={index}>{alias}</li>
            ))}
          </ul>
          <button
            onClick={() => setShowColumns(false)}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default QueryBuilder;
