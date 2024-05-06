import {Category} from '../../redux/category/slice';
import {PrivateApi} from './base';

const getList = async () => {
  //   return GetCategoryListSuccess;
  const response = await PrivateApi.get('categories');
  return response?.data as Category[];
};

const CategoryService = {
  getList,
};

export default CategoryService;
