import { ButtonProps, ButtonShape } from "./button.types";
import classNames from "classnames";
import { Size } from "../types/size.type";
const sizeClasses: Record<Size, string> = {
    tiny: 'btn_xs',
    small: 'btn-sm',
    normal: '',
    large: 'btn-lg'
}
const shapeClasses: Record<ButtonShape, string> = {
    wide: 'btn-wide',
    full: 'btn-block',
    square: 'btn-square',
    default: ''
}
export const Button: React.FC<ButtonProps> = ({
    variant,
    size = "normal",
    isDisable = false,
    isOutline = false,
    shape = "default",
    isLoading = false,
    loadingType = "spinner",
    loadingText = 'در حال در خواست...',
    type = "button",
    isLink = false,
    animatedIcon = false,
    children,
    className,
    ...rest

}: ButtonProps) => {
    const classes = classNames(
        'btn',
        className,
        { 'btn-outline': isOutline },
        { 'btn-link': isLink },
        { 'animated-icon': animatedIcon },
        { 'pointer-events-none opacity-80': isLoading },
        { [`btn-${variant}`]: variant },
        { [`${sizeClasses[size]}`]: size },
        { [`${shapeClasses[shape]}`]: shape }
    )
    return (
        <button type={type} disabled={isDisable} {...rest} className={classes}>
            {isLoading ? loadingText : children}
        </button>
    )
}