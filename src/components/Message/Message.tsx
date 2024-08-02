import React, { type PropsWithChildren, forwardRef } from "react";
import { VariantProps } from "class-variance-authority";
import { MessageVariants } from "./MessageVariants";
import { cm } from "@/util/classMerger";
import classNames from "classnames";
import { ShapeTypes } from "@/util/global-types";


type MessageProps = PropsWithChildren<{
    text?: string;
    className?: string;
    closable?: boolean;
    onClose?: () => void;
    icon?: React.ReactNode;
    content?: React.ReactNode;
    shape?: Exclude<ShapeTypes, "full">
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

// Helper function to get the icon for a given severity variant
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

    // Base message class names
    const messageClasses = cm(MessageVariants({ shape, severity }), className);

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
        <div ref={ref} className={messageClasses}>
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
