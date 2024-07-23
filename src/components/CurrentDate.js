
import React from 'react';

const CurrentDate = ({ onAddFunction }) => {
    const handleAdd = () => {
        onAddFunction('current_date()');
    };

    return (
        <div>
            <h3>Current Date (current_date)</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default CurrentDate;
