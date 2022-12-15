import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const notify = msg => toast(msg, { type: 'error' });

export const fetchAPI = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addAPI = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteAPI = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

export const changeAPI = async id => {
  const { data } = await axios.patch(`/contacts/${id}`);
  return data;
};

export const signUpAPI = async user => {
  try {
    const { data } = await axios.post('/users/signup', user);
    return data;
  } catch (error) {
    notify('User with same email already registered');
  }
};

export const logInAPI = async user => {
  try {
    const { data } = await axios.post('/users/login', user);
    return data;
  } catch (error) {
    notify('Login or password is incorrect');
  }
};

export const logOutAPI = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get('users/current');
  return data;
};

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
