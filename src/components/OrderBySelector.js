// src/components/OrderBySelector.js
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'transaction_date', label: 'Transaction Date' },
  { value: 'msisdn', label: 'MSISDN' },
  { value: 'instruct_amount', label: 'Instruct Amount' },
  // Add more fields as needed
];

const OrderBySelector = ({ onAddOrderBy }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOrder(selectedOption);
    onAddOrderBy(selectedOption.value);
  };

  return (
    <div>
      <h3>Select Order By</h3>
      <Select options={options} onChange={handleChange} value={selectedOrder} />
    </div>
  );
};

export default OrderBySelector;
