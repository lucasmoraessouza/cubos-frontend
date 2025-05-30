import { useMutation } from "@tanstack/react-query";
import { signIn, signUp } from "../http/auth";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { SignInResponse, SignUpRequest, SignUpResponse } from "../types/auth";

export function useAuth() {
  const navigate = useNavigate();

  const signUpMutation = useMutation<
  SignUpResponse,
  Error,
  SignUpRequest
>({
  mutationFn: signUp,
  onSuccess: (data) => {
    toast.success("Conta criada com sucesso!", {
      description: `Bem vindo(a), ${data.user.name}!`,
    });
    localStorage.setItem("token", data.token);
    navigate("/home");
  },
  onError: (error: any) => {
    toast.error(error.response.data.message);
  },
});

  const signInMutation = useMutation<
    SignInResponse,
    Error,
    { email: string; password: string }
  >({
    mutationFn: signIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      
      toast.success("Login realizado com sucesso!", {
        description: `Bem vindo(a), ${data.user.name}!`,
      });

      navigate("/home");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
    },
  });

  const signOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("Logout realizado com sucesso!");
  };

  return {
    signIn: signInMutation.mutateAsync,
    isSigningIn: signInMutation.isPending,
    signUp: signUpMutation.mutateAsync,
    isSigningUp: signUpMutation.isPending,
    signOut,
  };
} 