import React, { useState } from 'react';

const PercentRank = ({ onAddOperation }) => {
  const handleAdd = () => {
    const operation = `percent_rank()`;
    onAddOperation(operation);
  };

  return (
    <div>
      <h3>Percent Rank (percent_rank)</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default PercentRank;
