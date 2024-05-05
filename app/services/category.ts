import {PrivateApi} from './base';

const getList = async () => {
//   return GetCategoryListSuccess;
  const response = await PrivateApi.get('categories');
  return response?.data;
};

const CategoryService = {
  getList,
};

export default CategoryService;
