import { ComponentBase } from "../types/componetn-base.type";

export type RatingProps = Omit<ComponentBase , 'isDisabled'> & {
    rate: number;
}