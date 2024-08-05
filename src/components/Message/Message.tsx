import React, { type PropsWithChildren, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cm } from "@/util/classMerger";
import classNames from "classnames";
import { Shapes } from "@/util/global-types";
import { BadgeCheck, BadgeHelp, BadgeInfo, Info, OctagonAlert, Rocket, Siren, X } from "lucide-react";


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
    shape?: Exclude<Shapes, "full">

    /** The variant of the button.
    * @default "none"
    */
    severity?:
    | "none"
    | "contrast"
    | "muted"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";
}>;


/**
 * This function handles the entire message component shape and color properties
 */
const MessageVariants = cva(
    "flex items-center gap-2 border py-2 pe-2 ps-4",
    {
        variants: {
            shape: {
                none: "border-0",
                smooth: "rounded-md",
                rounded: "rounded-lg",
                curved: "rounded-xl",
            },
            severity: {
                none: "border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",
                contrast: "border-gray-300 bg-white text-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100",
                muted: "bg-gray-200 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",
                primary: "border-indigo-500 bg-indigo-500/10 text-indigo-500",
                info: "border-cyan-500 bg-cyan-500/10 text-cyan-500",
                success: "border-teal-500 bg-teal-500/10 text-teal-500",
                warning: "border-amber-500 bg-amber-500/10 text-amber-500",
                danger: "border-red-500 bg-red-500/10 text-red-500",
            }
        },
        defaultVariants: {
            shape: "none",
            severity: "none"
        }
    }
)

/**
 *  The function to set a message icon base its variant
 * @param variant 
 * @returns 
 */
const getVariantIcon = (variant: VariantProps<typeof MessageVariants>["severity"]) => {
    const iconMap = {
        none: <Siren size={20} />,
        contrast: <Info size={20} />,
        muted: <Info size={20} />,
        info: <BadgeInfo size={20} />,
        primary: <Rocket size={20} />,
        success: <BadgeCheck size={20} />,
        warning: <BadgeHelp size={20} />,
        danger: <OctagonAlert size={20} />,
    };

    const iconClass = iconMap[variant || "none"] || <Siren />;
    return iconClass;
};


const Message = forwardRef<HTMLDivElement, MessageProps>((props, ref) => {
    const {
        text,
        icon,
        onClose,
        content,
        className,
        closable = false,
        shape = "none",
        severity = "none",
    } = props;


    // Close button class names based on severity
    const closeButtonClasses = classNames(
        "ms-auto flex h-8 w-8 items-center justify-center rounded-full border-none bg-none transition-colors duration-300",
        {
            "text-gray-500 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700": severity === "none",
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
                    <X size={20} />
                </button>
            )}
        </div>
    );
});

export { Message };
