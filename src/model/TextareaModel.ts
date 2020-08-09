import { TextareaHTMLAttributes } from 'react';

export interface TextareaModel
    extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}
