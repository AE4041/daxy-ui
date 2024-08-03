import React, { type PropsWithChildren, forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import { MessageVariants } from "./MessageVariants";
import { cm } from "@/util/classMerger";
import classNames from "classnames";
import { Shapes } from "@/util/global-types";


type MessageProps = PropsWithChildren<{
    /** Message description */
    text?: string;

    /** Message className */
    className?: string;

    /** Whether the message should be able to unmount.
     * @default false
     */
    closable?: boolean;

    /** The native button click event to unmount message card. */
    onClose?: () => void;

    /** Message type icon */
    icon?: React.ReactNode;

    /** Message to be shown. */
    content?: React.ReactNode;

    /** The shape of the message component. */
    shape?: Exclude<Shapes, "full" | "hexa" | "blob" | "deca">

    /** The variant of the button.
    * @default "default"
    */
    severity?:
    | "default"
    | "contrast"
    | "muted"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";
}>;

/**
 *  The function to set a message icon base its variant
 * @param variant 
 * @returns 
 */
const getVariantIcon = (variant: VariantProps<typeof MessageVariants>["severity"]) => {
    const iconMap = {
        default: "ri-alarm-warning-line",
        contrast: "ri-alarm-warning-line",
        muted: "ri-alarm-warning-line",
        info: "ri-error-warning-line",
        primary: "ri-rocket-2-line",
        success: "ri-verified-badge-line",
        warning: "ri-error-warning-line",
        danger: "ri-spam-2-line",
    };

    const iconClass = iconMap[variant || "default"] || "ri-spam-3-line";
    return <i className={`${iconClass} text-lg`}></i>;
};


const Message = forwardRef<HTMLDivElement, MessageProps>((props, ref) => {
    const {
        text,
        icon,
        onClose,
        content,
        className,
        closable = false,
        shape = "default",
        severity = "default",
    } = props;


    // Close button class names based on severity
    const closeButtonClasses = classNames(
        "ms-auto flex h-8 w-8 items-center justify-center rounded-full border-none bg-none transition-colors duration-300",
        {
            "text-gray-500 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700": severity === "default",
            "text-gray-500 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800": severity === "contrast",
            "text-indigo-500 hover:bg-indigo-100": severity === "primary",
            "text-cyan-500 hover:bg-cyan-100": severity === "info",
            "text-teal-500 hover:bg-teal-100": severity === "success",
            "text-amber-500 hover:bg-amber-100": severity === "warning",
            "text-red-500 hover:bg-red-100": severity === "danger",
        }
    );

    return (
        <div ref={ref} className={cm(MessageVariants({ shape, severity }), className)}>
            {content ? <>{content}</>
                : (
                    <div className="flex items-center gap-3">
                        {icon || getVariantIcon(severity)}
                        <p className="text-sm">{text}</p>
                    </div>
                )}
            {closable && (
                <button className={closeButtonClasses} onClick={onClose}>
                    <i className="ri-close-line text-base"></i>
                </button>
            )}
        </div>
    );
});

export { Message, MessageVariants };
