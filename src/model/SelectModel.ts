import { SelectHTMLAttributes } from 'react';

export interface SelectModel extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}
