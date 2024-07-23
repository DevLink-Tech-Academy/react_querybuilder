
import React from 'react';

const JsonFunctions = ({ onAddFunction }) => {
    const jsonFunctions = [
        { label: 'From JSON', value: 'from_json' },
        { label: 'To JSON', value: 'to_json' },
        { label: 'Get JSON Object', value: 'get_json_object' },
    ];

    return (
        <div>
            <h3>JSON Functions</h3>
            {jsonFunctions.map((func, index) => (
                <button key={index} onClick={() => onAddFunction(func.value)}>
                    {func.label}
                </button>
            ))}
        </div>
    );
};

export default JsonFunctions;
