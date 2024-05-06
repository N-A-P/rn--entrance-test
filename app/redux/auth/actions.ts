import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthService from '../../services/http/auth';

export const signUpAndSignIn = createAsyncThunk(
  'auth/login',
  async (payload: {username: string; password: string}) => {
    await AuthService.signUp({
      email: payload.username,
      password: payload.password,
      firstName: 'John', // hard code firt & last name here
      lastName: 'Doe',
    });
    const auth = await AuthService.signIn({
      email: payload.username,
      password: payload.password,
    });
    return auth;
  },
);
