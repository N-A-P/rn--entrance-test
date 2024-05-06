import {createAsyncThunk} from '@reduxjs/toolkit';
import CategoryService from '../../services/http/category';

export const getCategoryList = createAsyncThunk(
  'category/getList',
  async () => {
    const categoryList = await CategoryService.getList();
    return categoryList;
  },
);
