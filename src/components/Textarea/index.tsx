import React from 'react';
import { TextareaModel } from '../../model/TextareaModel';

import './styles.css';

const Textarea: React.FC<TextareaModel> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
};

export default Textarea;
