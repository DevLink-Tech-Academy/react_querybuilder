
import React from 'react';

const MiscFunctions = ({ onAddFunction }) => {
    const miscFunctions = [
        { label: 'Coalesce', value: 'coalesce' },
        { label: 'Cast', value: 'cast' },
        { label: 'If', value: 'if' },
        { label: 'Case', value: 'case' },
    ];

    return (
        <div>
            <h3>Miscellaneous Functions</h3>
            {miscFunctions.map((func, index) => (
                <button key={index} onClick={() => onAddFunction(func.value)}>
                    {func.label}
                </button>
            ))}
        </div>
    );
};

export default MiscFunctions;
