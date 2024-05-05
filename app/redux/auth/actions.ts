import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthService, {SignUpOpts, SignUpPayload} from '../../services/auth';

export const signUpAndSignIn = createAsyncThunk(
  'auth/signUpAndSignIn',
  async (payload: any) => {
    await AuthService.signUp(payload);
    const auth = AuthService.signIn(payload);
    return auth;
  },
);
