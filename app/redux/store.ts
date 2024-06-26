import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {AuthReducer} from './auth/slice';
import {CategoryReducer} from './category/slice';

export const storeObject = configureStore({
  reducer: {
    auth: AuthReducer,
    category: CategoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeObject.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof storeObject.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
