
import React from 'react';

const DateFunctions = ({ onAddFunction }) => {
    const dateFunctions = [
        { label: 'Current Date', value: 'current_date' },
        { label: 'Current Timestamp', value: 'current_timestamp' },
        { label: 'Date Add', value: 'date_add' },
        { label: 'Date Subtract', value: 'date_sub' },
        { label: 'Date Diff', value: 'datediff' },
        { label: 'Truncate Date', value: 'date_trunc' },
    ];

    return (
        <div>
            <h3>Date Functions</h3>
            {dateFunctions.map((func, index) => (
                <button key={index} onClick={() => onAddFunction(func.value)}>
                    {func.label}
                </button>
            ))}
        </div>
    );
};

export default DateFunctions;
