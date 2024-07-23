import React, { useState } from 'react';

const Rank = ({ onAddOperation }) => {
  const handleAdd = () => {
    const operation = `rank()`;
    onAddOperation(operation);
  };

  return (
    <div>
      <h3>Rank (rank)</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Rank;
