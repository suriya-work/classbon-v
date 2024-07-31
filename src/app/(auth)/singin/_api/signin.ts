import { createData } from "@/core/http-service/http-service";
import { SignIn } from "../types/signin.types";
import { useMutation } from "@tanstack/react-query";

const signIn = (model: SignIn): Promise<void> =>
  createData<SignIn, void>("/signin", model);

type UseSignInOption = {
  onSuccess?: () => void;
};

export const useSignIn = ({ onSuccess }: UseSignInOption) => {
 const {mutate:submit , isPending} = useMutation({
    mutationFn: signIn,
    onSuccess: onSuccess,
 });
    
    return {
        submit , isPending
    }
};
