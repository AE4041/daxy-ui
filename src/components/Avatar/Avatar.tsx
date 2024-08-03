import React, { type PropsWithChildren } from "react";
import { cm } from "@/util/classMerger";
import { AvatarSize, Shapes } from "@/util/global-types";

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
    shape?: Shapes

    /** The `alt` attribute of the `img` element. */
    alt?: string;

    className?: string;
}>



const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
    const {
        src,
        shape = "default",
        alt,
        className
    } = props;


    return (
        <div ref={ref} className={cm(shape, className)}>
            <img src={src} alt={alt} />
        </div>
    )
})

export { Avatar }