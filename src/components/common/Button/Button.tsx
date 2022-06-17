import React, {FC} from 'react'
import './Button.scss'

export interface ButtonProps {
    text: string;
    type?: 'button' | 'submit' | 'reset';
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({text, onClick, type, disabled}) => {
    return (
        <button
            className="button"
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button
