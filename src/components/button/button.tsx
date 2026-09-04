import { forwardRef, type ReactNode } from 'react';
import styles from './button.module.scss';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
    children: ReactNode;
    to?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
}

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, to, ...props }, ref) => {
        const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

        if (to) {
            return (
                <Link
                    ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                    to={to}
                    className={classes}
                    onMouseDown={(e) => e.preventDefault()}
                    draggable={false}
                >
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref as React.ForwardedRef<HTMLButtonElement>} className={classes} type="button" {...props}>
                {children}
            </button>
        );
    }
);