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
            shape: "default",
            size: "default",
            severity: "default",
        },
    }
)