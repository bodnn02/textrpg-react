import React from 'react';

export const ColorForm = ({ name, colors, selectedColor }) => {
    return (
        <>
            {colors.map((color, index) => (
                <div className="radio-wrapper" key={index}>
                    <label htmlFor={`${name}-color-${index}`}>
                        <div className="color_rounded" style={{ backgroundColor: color.code }}></div>
                    </label>
                    <input
                        type="radio"
                        id={`${name}-color-${index}`}
                        name={name}
                        value={color.name}
                        onChange={() => selectedColor = color.name} // Fixed this line
                    />
                </div>
            ))}
        </>
    );
};
