import React from 'react';
import { InputModel } from '../../model/InputModel';

import './styles.css';

const Input: React.FC<InputModel> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
};

export default Input;
