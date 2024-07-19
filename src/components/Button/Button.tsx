import React, { forwardRef, type PropsWithChildren } from "react";
import { VariantProps } from "class-variance-authority";
import { ButtonVariants } from "./ButtonVariants";
import { cm } from "../../util/classMerger";

type ButtonBaseProps = PropsWithChildren<{
    label?: string;
    loading?: boolean;
    iconOnly?: boolean;
    disabled?: boolean;
    className?: string;
}>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonBaseProps {
    asChild?: boolean;
}

interface ButtonPropsDuo extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
    asChild?: boolean;
}

// BaseButton component with ref forwarding
const Button = forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps & ButtonPropsDuo>(
    ({ className, severity, size, shape, children, disabled, ...props }, ref) => {
        return (
            <button
                className={cm(ButtonVariants({ className, shape, severity, size }))}
                ref={ref}
                {...props}
                disabled={disabled}
            >
                {children || props.label}
            </button>
        );
    }
);

export {Button, ButtonVariants}

