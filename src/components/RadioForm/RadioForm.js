import React from 'react'

export const RadioForm = ({ name, items, selectedItem, onSelect }) => {
    return (
        <>
            {items.map((item, index) => (
                <div className="radio-wrapper" key={index}>
                    <label htmlFor={`${name}-item-${index}`}>{item.name}</label>
                    <input
                        type="radio"
                        id={`${name}-item-${index}`}
                        name={name}
                        value={item.name}
                        onChange={() => onSelect(item)} // Fixed this line
                    />
                </div>
            ))}
        </>
    )
}
