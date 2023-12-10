import { ComponentBase } from "../types/componetn-base.type";

export type PriceProps = Omit<ComponentBase , 'isDisabled' | 'variant'> & {
    price?: number;
    text? : string
}