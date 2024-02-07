import React from 'react'

import {styles} from './FormSection.css'

export const FormSection = ({ title, children }) => {
    return (
        <div className="form-section">
            <div className="form-section__header">
                <h3 className="form-h3">{title}</h3>
            </div>
            <div className="form-section__content">
                {children}
            </div>
        </div>
    )
}
