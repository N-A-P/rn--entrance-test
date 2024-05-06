import {PublicApi} from './base';

export type SignUpPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
const signUp = async (payload: SignUpPayload) => {
  const response = await PublicApi.post('/auth/signup', payload);
  if (!response.ok) {
    throw response.data;
  }
  return response?.data;
};

type SignInPayload = {
  email: string;
  password: string;
};
export type SignInResponse = {
  user: {
    id: number;
    createdAt: string;
    updatedAt: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
};
const signIn = async (payload: SignInPayload) => {
  const response = await PublicApi.post('/auth/signin', payload);
  if (!response.ok) {
    throw response.data;
  }
  return response?.data as SignInResponse;
};

const AuthService = {
  signUp,
  signIn,
};

export default AuthService;
