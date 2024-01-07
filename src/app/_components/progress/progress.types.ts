import { ComponentBase } from "../types/componetn-base.type";

export type ProgressProps = Omit<ComponentBase , 'isDisabled'> & {
    value: number;
}