import { Size } from "../types/size.type";
import { BadgeProps } from "./badge-types";
import classNames from "classnames";
const sizeClasses: Record<Size, string> = {
    tiny: 'badge_xs',
    small: 'badge-sm',
    normal: '',
    large: 'badge-lg'
}
export const Badge: React.FC<BadgeProps> = ({
    variant,
    className,
    children,
    size = 'tiny',
}: BadgeProps) => {

    const classes = classNames("badge", className, {
        [`badge-${variant}`]: variant,
        [`${sizeClasses[size]}`] : size
    })
    return (
        <span className={classes}>
            {children}
        </span>
    )
}