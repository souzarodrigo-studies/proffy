import { InputHTMLAttributes } from 'react';

export interface InputModel extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}
