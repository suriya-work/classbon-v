import { Variant } from "./variant.type";
import { Size } from "./size.type";

export type ComponentBase =  {
    isDisable?: boolean;
    className?: string;
    variant?: Variant;
    size: Size;
}