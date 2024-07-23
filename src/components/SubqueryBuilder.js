// src/components/SubqueryBuilder.js
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'transaction_date', label: 'Transaction Date' },
  { value: 'msisdn', label: 'MSISDN' },
  { value: 'instruct_amount', label: 'Instruct Amount' },
  // Add more fields as needed
];

const SubqueryBuilder = ({ onAddSubquery }) => {
  const [fields, setFields] = useState([]);
  const [conditions, setConditions] = useState([]);

  const handleAddField = (field) => setFields([...fields, field]);
  const handleAddCondition = (condition) => setConditions([...conditions, condition]);

  const generateSubquery = () => {
    let selectClause = fields.join(', ');
    let whereClause = conditions.map(cond => `${cond.field} ${cond.operator} ${cond.value}`).join(' AND ');
    return `
      SELECT ${selectClause}
      FROM test_bed.momo_transaction_logs
      ${conditions.length ? 'WHERE ' + whereClause : ''};
    `;
  };

  return (
    <div>
      <h3>Build Subquery</h3>
      <Select options={options} onChange={(opt) => handleAddField(opt.value)} isMulti />
      {/* Add similar UI for conditions */}
      <button onClick={() => onAddSubquery(generateSubquery())}>Add Subquery</button>
    </div>
  );
};

export default SubqueryBuilder;
