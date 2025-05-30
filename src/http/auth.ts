import type { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse } from '../types/auth';
import { api } from './api';

export async function signIn(data: SignInRequest): Promise<SignInResponse> {
  const response = await api.post<SignInResponse>('/auth/signin', data);
  return response.data;
}

export async function signUp(data: SignUpRequest): Promise<SignUpResponse> {
  const response = await api.post<SignUpResponse>("/auth/signup", data);
  return response.data;
} 