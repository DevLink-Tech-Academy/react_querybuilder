
import React from 'react';

const WindowFunctions = ({ onAddFunction }) => {
    const windowFunctions = [
        { label: 'Row Number', value: 'row_number' },
        { label: 'Rank', value: 'rank' },
        { label: 'Dense Rank', value: 'dense_rank' },
        { label: 'Percent Rank', value: 'percent_rank' },
        { label: 'Ntile', value: 'ntile' },
        { label: 'Lead', value: 'lead' },
        { label: 'Lag', value: 'lag' },
    ];

    return (
        <div>
            <h3>Window Functions</h3>
            {windowFunctions.map((func, index) => (
                <button key={index} onClick={() => onAddFunction(func.value)}>
                    {func.label}
                </button>
            ))}
        </div>
    );
};

export default WindowFunctions;
