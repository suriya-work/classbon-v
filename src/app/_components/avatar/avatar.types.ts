import { ComponentBase } from "../types/componetn-base.type";

export type AvatarProps = Omit<ComponentBase, "isDisabled"> & {
  src?: string;
  alt?: string;
};