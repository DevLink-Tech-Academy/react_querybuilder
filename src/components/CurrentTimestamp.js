
import React from 'react';

const CurrentTimestamp = ({ onAddFunction }) => {
    const handleAdd = () => {
        onAddFunction('current_timestamp()');
    };

    return (
        <div>
            <h3>Current Timestamp (current_timestamp)</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default CurrentTimestamp;
