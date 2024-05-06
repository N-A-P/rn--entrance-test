import {create} from 'apisauce';
import {storeObject} from '../../redux/store';

const PublicApi = create({
  baseURL: 'http://streaming.nexlesoft.com:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

const PrivateApi = create({
  baseURL: 'http://streaming.nexlesoft.com:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

PrivateApi.addRequestTransform(request => {
  const accessToken = storeObject?.getState?.()?.auth?.accessToken ?? '';
  if (!request.headers) {
    request.headers = {};
  }
  request.headers.Authorization = 'Bearer ' + accessToken;

  return request;
});

export {PublicApi, PrivateApi};
