
import React from 'react';

const BitwiseFunctions = ({ onAddFunction }) => {
    const bitwiseFunctions = [
        { label: 'Bitwise AND', value: '&' },
        { label: 'Bitwise OR', value: '|' },
        { label: 'Bitwise XOR', value: '^' },
        { label: 'Bitwise NOT', value: '~' },
        { label: 'Bitwise Shift Left', value: '<<' },
        { label: 'Bitwise Shift Right', value: '>>' },
    ];

    return (
        <div>
            <h3>Bitwise Functions</h3>
            {bitwiseFunctions.map((func, index) => (
                <button key={index} onClick={() => onAddFunction(func.value)}>
                    {func.label}
                </button>
            ))}
        </div>
    );
};

export default BitwiseFunctions;
