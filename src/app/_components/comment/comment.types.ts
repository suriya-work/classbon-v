import { Comment } from "@/types/comment.interface";
import { ComponentBase } from "../types/componetn-base.type";

export type CommentProps = Omit<ComponentBase, "isDisabled" | "size"> & Comment;