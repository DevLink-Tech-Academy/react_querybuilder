
import React from 'react';

const ArrayFunctions = ({ onAddFunction }) => {
    const arrayFunctions = [
        { label: 'Array', value: 'array' },
        { label: 'Array Contains', value: 'array_contains' },
        { label: 'Array Distinct', value: 'array_distinct' },
        { label: 'Array Intersection', value: 'array_intersect' },
    ];

    return (
        <div>
            <h3>Array Functions</h3>
            {arrayFunctions.map((func, index) => (
                <button key={index} onClick={() => onAddFunction(func.value)}>
                    {func.label}
                </button>
            ))}
        </div>
    );
};

export default ArrayFunctions;
