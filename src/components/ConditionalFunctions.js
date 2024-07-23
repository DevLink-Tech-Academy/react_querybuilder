
import React from 'react';

const ConditionalFunctions = ({ onAddFunction }) => {
    const conditionalFunctions = [
        { label: 'Case When', value: 'case when ... then ... end' },
        { label: 'If Null', value: 'ifnull' },
    ];

    return (
        <div>
            <h3>Conditional Functions</h3>
            {conditionalFunctions.map((func, index) => (
                <button key={index} onClick={() => onAddFunction(func.value)}>
                    {func.label}
                </button>
            ))}
        </div>
    );
};

export default ConditionalFunctions;
