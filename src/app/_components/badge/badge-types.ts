import { ReactNode } from "react";
import { ComponentBase } from "../types/componetn-base.type";

export type BadgeProps = Omit<ComponentBase, "isDisabled"> & {
  children: ReactNode;
};
