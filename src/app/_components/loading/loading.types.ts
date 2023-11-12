import { ComponentBase } from "../types/componetn-base.type";

export type LoadingProps = Omit<ComponentBase , 'isDisable'> & {
    type?: 'spinner' | 'ring'
}