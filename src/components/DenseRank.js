import React, { useState } from 'react';

const DenseRank = ({ onAddOperation }) => {
  const handleAdd = () => {
    const operation = `dense_rank()`;
    onAddOperation(operation);
  };

  return (
    <div>
      <h3>Dense Rank (dense_rank)</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default DenseRank;
