import React, { type PropsWithChildren } from "react";
import { VariantProps } from "class-variance-authority";
import { ButtonVariants } from "./ButtonVariants";
import { cm } from "../../util/classMerger";

type ButtonProps = PropsWithChildren<{
    label?: string;
    loading?: boolean;
    iconOnly?: boolean;
    disabled?: boolean;
    className?: string;
    shape?: VariantProps<typeof ButtonVariants>["shape"];
    size?: VariantProps<typeof ButtonVariants>["size"];
    severity?: VariantProps<typeof ButtonVariants>["severity"];
}>;


// BaseButton component with ref forwarding
const Button = React.forwardRef<HTMLAnchorElement & HTMLButtonElement, ButtonProps>((props, ref) => {
    const { disabled, loading, className, label, shape = "default", size = "default", severity = "default",
        children, ...rest
    } = props;

    return (
        <button ref={ref}
            className={cm(ButtonVariants({ shape, severity, size }), className,)}
            disabled={disabled}
            {...rest}
        >
            {loading ? <span className="loader">Loading...</span> : label || children}
        </button>
    );
})

export { Button, ButtonVariants }

