import React from "react";
import { ComponentBase } from "../types/componetn-base.type";

export type AlertProps = Omit<ComponentBase, 'size' | 'isDisabled'> & {
    showIcon?: boolean;
    children: React.ReactNode
}