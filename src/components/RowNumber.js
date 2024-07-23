import React, { useState } from 'react';

const RowNumber = ({ onAddOperation }) => {
  const handleAdd = () => {
    const operation = `row_number()`;
    onAddOperation(operation);
  };

  return (
    <div>
      <h3>Row Number (row_number)</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default RowNumber;
