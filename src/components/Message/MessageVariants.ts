import { cva } from "class-variance-authority";

export const MessageVariants = cva(
    "flex items-center gap-2 border py-2 pe-2 ps-4",
    {
        variants: {
            shape: {
                default: "border-0",
                smooth: "rounded-md",
                rounded: "rounded-lg",
                curved: "rounded-xl",
            },
            severity: {
                default: "border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100",
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
            shape: "default",
            severity: "default"
        }
    }
)