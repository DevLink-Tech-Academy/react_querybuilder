
import React, { useState } from 'react';

const DateAdd = ({ onAddFunction }) => {
    const [date, setDate] = useState('');
    const [interval, setInterval] = useState('');

    const handleAdd = () => {
        if (date && interval) {
            const operation = `date_add(${date}, ${interval})`;
            onAddFunction(operation);
            setDate('');
            setInterval('');
        }
    };

    return (
        <div>
            <h3>Date Add (date_add)</h3>
            <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Interval"
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default DateAdd;
