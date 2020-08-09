import React from 'react';
import { SelectModel } from '../../model/SelectModel';

import './styles.css';

const Select: React.FC<SelectModel> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}>
                <option value="" disabled selected hidden>
                    Selecione uma opção
                </option>

                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;
