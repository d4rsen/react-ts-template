import React, {FC} from 'react'
import './Input.scss'

export interface InputProps {
    name?: string;
    value?: string | number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'number' | 'time' | 'password';
    disabled?: boolean;
}

const Input: FC<InputProps> = ({name, value, onChange, placeholder, type, disabled}) => {
    return (
        <input
            className="input"
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
        />
    )
}

export default Input
