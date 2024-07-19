import { cva } from "class-variance-authority"

export const ButtonVariants = cva(
    "cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 h-10 px-4 py-2 border inline-flex items-center gap-1 whitespace-nowrap text-center text-sm undefined",
    {
        variants: {
            shape: {
                default: "",
                rounded: "rounded-md",
                smooth: "rounded-lg",
                curved: "rounded-xl",
                full: "rounded-full"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-11 px-8",
                icon: "h-10 w-10",
            },
            severity: {
                default: "[&>span>.loader]:text-gray-500 dark:[&>span>.loader]:text-gray-200 bg-white hover:enabled:bg-gray-50 active:enabled:bg-gray-100 hover:enabled:border-gray-300 dark:hover:enabled:border-gray-600 text-gray-800 dark:text-gray-100 dark:bg-gray-800 dark:hover:enabled:bg-gray-700",
                primary: "[&>span>.loader]:text-gray-100 border border-primary-500 bg-primary-500 text-white enabled:hover:bg-primary-600 active:enabled:bg-primary-400",
                info: "[&>span>.loader]:text-gray-100 border border-info-500 bg-info-500 text-white enabled:hover:bg-info-600 active:enabled:bg-info-400",
                success: "[&>span>.loader]:text-gray-100 border border-success-500 bg-success-500 text-white enabled:hover:bg-success-600 active:enabled:bg-success-400",
                warning: "[&>span>.loader]:text-gray-100 border border-warning-500 bg-warning-500 text-white enabled:hover:bg-warning-600 active:enabled:bg-warning-400",
                danger: "[&>span>.loader]:text-gray-100 border border-danger-500 bg-danger-500 text-white enabled:hover:bg-danger-600 active:enabled:bg-danger-400",
                muted: "[&>span>.loader]:text-gray-500 dark:[&>span>.loader]:text-gray-200 bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-100 enabled:hover:bg-gray-300 dark:enabled:hover:bg-gray-700 active:enabled:bg-gray-100",
                mutedDefault: "[&>span>.loader]:text-gray-500 dark:[&>span>.loader]:text-gray-200 bg-gray-300/30 dark:bg-gray-300/10 text-gray-500 dark:text-gray-400 enabled:hover:bg-gray-300/60 dark:enabled:hover:bg-gray-300/20 active:enabled:bg-gray-300/30 dark:active:enabled:bg-gray-300/10",
                mutedPrimary: "[&>span>.loader]:text-primary-500 bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 enabled:hover:bg-primary-500/20 dark:enabled:hover:bg-primary-500/30 active:enabled:bg-primary-500/10 dark:active:enabled:bg-primary-500/10",
                mutedInfo: "[&>span>.loader]:text-info-500 bg-info-500/10 dark:bg-info-500/20 text-info-500 enabled:hover:bg-info-500/20 dark:enabled:hover:bg-info-500/30 active:enabled:bg-info-500/10 dark:active:enabled:bg-info-500/10",
                mutedSuccess: "[&>span>.loader]:text-success-500 bg-success-500/10 dark:bg-success-500/20 text-success-500 enabled:hover:bg-success-500/20 dark:enabled:hover:bg-success-500/30 active:enabled:bg-success-500/10 dark:active:enabled:bg-success-500/10",
                mutedWarning: "[&>span>.loader]:text-warning-500 bg-warning-500/10 dark:bg-warning-500/20 text-warning-500 enabled:hover:bg-warning-500/20 dark:enabled:hover:bg-warning-500/30 active:enabled:bg-warning-500/10 dark:active:enabled:bg-warning-500/10",
                mutedDanger: "[&>span>.loader]:text-danger-500 bg-danger-500/10 dark:bg-danger-500/20 text-danger-500 enabled:hover:bg-danger-500/20 dark:enabled:hover:bg-danger-500/30 active:enabled:bg-danger-500/10 dark:active:enabled:bg-danger-500/10"
            },
        },
        defaultVariants: {
        },
    }
)