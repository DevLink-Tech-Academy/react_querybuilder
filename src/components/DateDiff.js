
import React, { useState } from 'react';

const DateDiff = ({ onAddFunction }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleAdd = () => {
        if (startDate && endDate) {
            const operation = `datediff(${startDate}, ${endDate})`;
            onAddFunction(operation);
            setStartDate('');
            setEndDate('');
        }
    };

    return (
        <div>
            <h3>Date Diff (datediff)</h3>
            <input
                type="text"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="End Date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default DateDiff;
