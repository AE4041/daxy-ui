import React, { type PropsWithChildren } from "react";
import { cm } from "@/util/classMerger";
import { AvatarSize } from "@/util/global-types";
import { cva } from "class-variance-authority";
import { Shapes } from "@/util/global-types";


type AvatarProps = PropsWithChildren<{
    /** The size of the avatar 
     * @default "xxxs"
    */
    size?: AvatarSize;

    /** The `src` attribute for the `img` element.*/
    src?: string;

    /** Shape of the Avatar
     * @default "default"
     */
    shape?: Shapes;

    /** The `alt` attribute of the `img` element. */
    alt?: string;

    className?: string;
}>;

const AvatarVariants = cva(
    "relative shrink-0 block",
    {
        variants: {
            size: {
                xxxs: "size-6",
            },
            shape: {
                none: "rounded-0",
                smooth: "rounded-sm",
                rounded: "rounded-md",
                curved: "rounded-xl",
                full: "rounded-full",
            },
        },
        defaultVariants: {
            shape: "none",
            size: "xxxs",
        },
    }
);

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
    const {
        src,
        shape = "none",
        alt,
        className,
    } = props;

    return (
        <div ref={ref} className={cm(AvatarVariants({ shape }), className)}>
            <img
                className="w-full block object-cover object-center"
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                style={{ color: "transparent" }}
            />
        </div>
    );
});

export { Avatar };
