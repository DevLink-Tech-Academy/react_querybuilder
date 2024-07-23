import React, { useState } from 'react';

const IfNull = ({ onAddOperation }) => {
  const [expr1, setExpr1] = useState('');
  const [expr2, setExpr2] = useState('');

  const handleAdd = () => {
    if (expr1 && expr2) {
      const operation = `ifnull(${expr1}, ${expr2})`;
      onAddOperation(operation);
      setExpr1('');
      setExpr2('');
    }
  };

  return (
    <div>
      <h3>If Null (ifnull)</h3>
      <input
        type="text"
        placeholder="Expression 1"
        value={expr1}
        onChange={(e) => setExpr1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Expression 2"
        value={expr2}
        onChange={(e) => setExpr2(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default IfNull;
