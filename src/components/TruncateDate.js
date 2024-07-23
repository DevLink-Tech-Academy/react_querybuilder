
import React, { useState } from 'react';

const TruncateDate = ({ onAddFunction }) => {
    const [date, setDate] = useState('');
    const [format, setFormat] = useState('');

    const handleAdd = () => {
        if (date && format) {
            const operation = `date_trunc(${date}, ${format})`;
            onAddFunction(operation);
            setDate('');
            setFormat('');
        }
    };

    return (
        <div>
            <h3>Truncate Date (date_trunc)</h3>
            <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Format"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default TruncateDate;
