import React, { type PropsWithChildren } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cm } from "../../util/classMerger";
import classNames from "classnames";
import { Shapes, ButtonSize } from "@/util/global-types";


type ButtonProps = PropsWithChildren<{
    /** The text content of the button.*/
    label?: string;

    /** Button icon */
    icon?: React.ReactNode;

    /**
     * Whether the button should be in loading state.
     * @default false
     */
    loading?: boolean;

    /** Whether the button should have no label but icon only.*/
    iconOnly?: boolean;

    /** Whether the button should not be able to interact with. */
    disabled?: boolean;

    /** Button class  */
    className?: string;

    /** The native button click event handler. */
    onClick?: () => void;

    /** Whether button icon should be on the right or left position
     * @default "left"
     */
    iconPosition?: "right" | "left";

    /** The size of the button
     * @default "default"
     */
    size?: ButtonSize;

    /** The shape of the button. */
    shape?: Shapes;

    /** The variant of the button.
     * @default "default"
     */
    severity?: VariantProps<typeof ButtonVariants>["severity"];
}>;


const ButtonVariants = cva(
    "cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 h-10 px-4 py-2 border whitespace-nowrap text-center text-sm undefined",
    {
        variants: {
            shape: {
                none: "",
                rounded: "rounded-md",
                smooth: "rounded-lg",
                curved: "rounded-xl",
                full: "rounded-full"
            },
            size: {
                xs: "h-9 px-3 py-2",
                sm: "h-10 px-4 py-2",
                lg: "h-11 px-8",
                icon: "h-10 w-10",
            },
            severity: {
                none: "[&>span>.loader]:text-gray-500 dark:[&>span>.loader]:text-gray-200 bg-white hover:enabled:bg-gray-50 active:enabled:bg-gray-100 hover:enabled:border-gray-300 dark:hover:enabled:border-gray-600 text-gray-800 dark:text-gray-100 dark:bg-gray-800 dark:hover:enabled:bg-gray-700",
                primary: "[&>span>.loader]:text-gray-100 border border-indigo-500 bg-indigo-500 text-white enabled:hover:bg-indigo-600 active:enabled:bg-indigo-400",
                info: "[&>span>.loader]:text-gray-100 border border-cyan-500 bg-cyan-500 text-white enabled:hover:bg-cyan-600 active:enabled:bg-cyan-400",
                success: "[&>span>.loader]:text-gray-100 border border-teal-500 bg-teal-500 text-white enabled:hover:bg-teal-600 active:enabled:bg-teal-400",
                warning: "[&>span>.loader]:text-gray-100 border border-amber-500 bg-amber-500 text-white enabled:hover:bg-amber-600 active:enabled:bg-amber-400",
                danger: "[&>span>.loader]:text-gray-100 border border-red-500 bg-red-500 text-white enabled:hover:bg-red-600 active:enabled:bg-red-400",
                muted: "[&>span>.loader]:text-gray-500 dark:[&>span>.loader]:text-gray-200 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-100 enabled:hover:bg-gray-300 dark:enabled:hover:bg-gray-700 active:enabled:bg-gray-100",
                mutedDefault: "[&>span>.loader]:text-gray-500 dark:[&>span>.loader]:text-gray-200 bg-gray-300/30 dark:bg-gray-300/10 text-gray-500 dark:text-gray-400 enabled:hover:bg-gray-300/60 dark:enabled:hover:bg-gray-300/20 active:enabled:bg-gray-300/30 dark:active:enabled:bg-gray-300/10",
                mutedPrimary: "[&>span>.loader]:text-indigo-500 bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 enabled:hover:bg-indigo-500/20 dark:enabled:hover:bg-indigo-500/30 active:enabled:bg-indigo-500/10 dark:active:enabled:bg-indigo-500/10",
                mutedInfo: "[&>span>.loader]:text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 enabled:hover:bg-cyan-500/20 dark:enabled:hover:bg-cyan-500/30 active:enabled:bg-cyan-500/10 dark:active:enabled:bg-cyan-500/10",
                mutedSuccess: "[&>span>.loader]:text-teal-500 bg-teal-500/10 dark:bg-teal-500/20 text-teal-500 enabled:hover:bg-teal-500/20 dark:enabled:hover:bg-teal-500/30 active:enabled:bg-teal-500/10 dark:active:enabled:bg-teal-500/10",
                mutedWarning: "[&>span>.loader]:text-amber-500 bg-amber-500/10 dark:bg-amber-500/20 text-amber-500 enabled:hover:bg-amber-500/20 dark:enabled:hover:bg-amber-500/30 active:enabled:bg-amber-500/10 dark:active:enabled:bg-amber-500/10",
                mutedDanger: "[&>span>.loader]:text-red-500 bg-red-500/10 dark:bg-red-500/20 text-red-500 enabled:hover:bg-red-500/20 dark:enabled:hover:bg-red-500/30 active:enabled:bg-red-500/10 dark:active:enabled:bg-red-500/10",
                outline: "[&>span>.loader]:text-muted-500 dark:[&>span>.loader]:text-muted-200 border-muted-300 text-muted-500 hover:bg-white hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-700 hover:enabled:text-muted-600 dark:hover:enabled:text-muted-100 ",
                outlinePrimary: "[&>span>.loader]:text-indigo-500 border border-indigo-500 text-indigo-500 hover:bg-indigo-500 active:enabled:bg-indigo-400 hover:text-white",
                outlineInfo: "[&>span>.loader]:text-cyan-500 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 active:enabled:bg-cyan-400 hover:text-white",
                outlineSuccess: "border border-teal-500 text-teal-500 hover:bg-teal-500 active:enabled:bg-teal-400 hover:text-white",
                outlineWarning: "[&>span>.loader]:text-amber-500 border border-amber-500 text-amber-500 hover:bg-amber-500 active:enabled:bg-amber-400 hover:text-white",
                outlineDanger: "[&>span>.loader]:text-red-500 border border-red-500 text-red-500 hover:bg-red-500 active:enabled:bg-red-400 hover:text-white"
            },
        },
        defaultVariants: {
            shape: "none",
            size: "sm",
            severity: "none",
        },
    }
)

// Spinner component for loading state
const ButtonSpinner: React.FC = () => (
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
        />
        <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
        />
    </svg>
);

// Button component with ref forwarding
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
        const {
            label,
            icon,
            className,
            onClick,
            loading = false,
            iconOnly = false,
            disabled = false,
            shape = "none",
            size = iconOnly ? "icon" : "sm",
            severity = "none",
            iconPosition = "left",
            ...rest
        } = props;

        return (
            <button
                ref={ref}
                className={cm(ButtonVariants({ shape, severity, size }), className)}
                disabled={disabled || loading}
                onClick={onClick}
                {...rest}
            >
                <div
                    className={classNames("relative inline-flex flex-row items-center justify-center gap-1",
                        { "flex-row-reverse": iconPosition === "right" }
                    )}
                >
                    {icon && !loading && (<span>{icon}</span>)}
                    <div className="flex items-center justify-center gap-1">
                        {loading && <ButtonSpinner />}
                        {!iconOnly && <span>{label}</span>}
                    </div>
                </div>
            </button>
        );
    }
);

export { Button };
