import React, { useState, useEffect } from 'react';
import { format } from 'sql-formatter';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import sql from 'react-syntax-highlighter/dist/esm/languages/hljs/sql';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Addition from './Addition';
import Subtraction from './Subtraction';
import Multiplication from './Multiplication';
import Division from './Division';
import Modulus from './Modulus';
import Equal from './Equal';
import NotEqual from './NotEqual';
import LessThan from './LessThan';
import LessThanOrEqual from './LessThanOrEqual';
import GreaterThan from './GreaterThan';
import GreaterThanOrEqual from './GreaterThanOrEqual';
import NullSafeEqual from './NullSafeEqual';
import And from './And';
import Or from './Or';
import Not from './Not';
import Count from './Count';
import Sum from './Sum';
import Average from './Average';
import Min from './Min';
import Max from './Max';
import Concat from './Concat';
import Substring from './Substring';
import Length from './Length';
import Replace from './Replace';
import Upper from './Upper';
import Lower from './Lower';
import CurrentDate from './CurrentDate';
import CurrentTimestamp from './CurrentTimestamp';
import DateAdd from './DateAdd';
import DateSubtract from './DateSubtract';
import DateDiff from './DateDiff';
import TruncateDate from './TruncateDate';
import FromJson from './FromJson';
import ToJson from './ToJson';
import GetJsonObject from './GetJsonObject';
import ArrayFunction from './Array';
import ArrayContains from './ArrayContains';
import ArrayDistinct from './ArrayDistinct';
import ArrayIntersection from './ArrayIntersection';
import Coalesce from './Coalesce';
import Cast from './Cast';
import If from './If';
import Case from './Casebk';
import CaseWhen from './CaseWhen';
import IfNull from './IfNull';
import RowNumber from './RowNumber';
import Rank from './Rank';
import DenseRank from './DenseRank';
import PercentRank from './PercentRank';
import Ntile from './Ntile';
import Lead from './Lead';
import Lag from './Lag';
import BitwiseAnd from './BitwiseAnd';
import BitwiseOr from './BitwiseOr';
import BitwiseXor from './BitwiseXor';
import BitwiseNot from './BitwiseNot';
import BitwiseShiftLeft from './BitwiseShiftLeft';
import BitwiseShiftRight from './BitwiseShiftRight';
import AddColumns from './AddColumns';


SyntaxHighlighter.registerLanguage('sql', sql);

const components = {
  AddColumns,
  Addition,
  Subtraction,
  Multiplication,
  Division,
  Modulus,
  Equal,
  NotEqual,
  LessThan,
  LessThanOrEqual,
  GreaterThan,
  GreaterThanOrEqual,
  NullSafeEqual,
  And,
  Or,
  Not,
  Count,
  Sum,
  Average,
  Min,
  Max,
  Concat,
  Substring,
  Length,
  Replace,
  Upper,
  Lower,
  CurrentDate,
  CurrentTimestamp,
  DateAdd,
  DateSubtract,
  DateDiff,
  TruncateDate,
  FromJson,
  ToJson,
  GetJsonObject,
  ArrayFunction,
  ArrayContains,
  ArrayDistinct,
  ArrayIntersection,
  Coalesce,
  Cast,
  If,
  Case,
  CaseWhen,
  IfNull,
  RowNumber,
  Rank,
  DenseRank,
  PercentRank,
  Ntile,
  Lead,
  Lag,
  BitwiseAnd,
  BitwiseOr,
  BitwiseXor,
  BitwiseNot,
  BitwiseShiftLeft,
  BitwiseShiftRight,
};

const QueryBuilder = () => {
  const [query, setQuery] = useState('');
  const [selectedComponent, setSelectedComponent] = useState('');
  const [columns, setColumns] = useState([]);
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
      generateQuery(newColumns);
      return newColumns;
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
    setTableName('');
  };

  const handleSelectChange = (e) => {
    setSelectedComponent(e.target.value);
  };

  const handleTableNameChange = (e) => {
    const newTableName = e.target.value;
    setTableName(newTableName);
    generateQuery(columns, newTableName);
  };

  const handleColumnEdit = (index) => {
    setEditingColumnIndex(index);
  };

  const handleColumnChange = (index, value) => {
    const newColumns = [...columns];
    newColumns[index] = value;
    setColumns(newColumns);
    generateQuery(newColumns);
  };

  const handleAliasChange = (index, value) => {
    const newColumns = [...columns];
    const columnParts = newColumns[index].split(' AS ');
    newColumns[index] = `${columnParts[0]} AS ${value}`;
    setColumns(newColumns);
    generateQuery(newColumns);
  };

  const handleRemoveColumn = (index) => {
    const newColumns = columns.filter((_, colIndex) => colIndex !== index);
    setColumns(newColumns);
    generateQuery(newColumns);
  };

  const generateQuery = (columnsList = columns, table = tableName) => {
    const selectClause = `SELECT ${columnsList.join(', ')}`;
    const fromClause = table ? ` FROM ${table}` : '';
    const generatedQuery = `${selectClause}${fromClause}`;
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

  const extractColumnsFromQuery = () => {
    const selectPart = query.split(' FROM ')[0];
    const columnsPart = selectPart.replace('SELECT', '').trim();
    const extractedColumns = columnsPart.split(',').map(col => col.trim());
    return extractedColumns;
  };

  const handleValidateQuery = () => {
    validateSQLQuery(query);
  };

  const SelectedComponent = components[selectedComponent] || null;

  return (
    <div className="query-builder p-4 max-w-4xl mx-auto">
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Table Name</h3>
        <input
          type="text"
          placeholder="Table Name"
          value={tableName}
          onChange={handleTableNameChange}
          className="border p-2 w-full"
        />
      </div>
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
                  className="border p-2 mr-2"
                />
                <input
                  type="text"
                  value={col.split(' AS ')[1] || ''}
                  onChange={(e) => handleAliasChange(index, e.target.value)}
                  onBlur={() => setEditingColumnIndex(null)}
                  className="border p-2"
                />
              </>
            ) : (
              <span
                onClick={() => handleColumnEdit(index)}
                className="cursor-pointer mr-2"
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
        <select
          onChange={handleSelectChange}
          value={selectedComponent}
          className="border p-2 w-full"
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
      <textarea
        value={query}
        onChange={handleQueryChange}
        placeholder="Build your query here"
        rows="4"
        cols="50"
        className="border p-2 w-full mb-4"
      />
      {validationMessage && (
        <div className={`p-2 mb-4 ${validationMessage.includes('valid') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {validationMessage}
        </div>
      )}
      <SyntaxHighlighter language="sql" style={docco} className="border p-2 mb-4">
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
            {extractColumnsFromQuery().map((column, index) => (
              <li key={index}>{column}</li>
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
