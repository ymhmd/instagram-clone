import axios, {AxiosResponse} from 'axios';
import {UserPayload} from '../../redux/user';
import {UserPostInfo} from '../../redux/posts';
import {BASE_URL} from '../env';

export const getUserInfo = async (userId: string) => {
  const url = `${BASE_URL}/users/${userId}/info`;

  const response: AxiosResponse = await axios.get(url).then(data => {
    return data;
  });

  const userInfo: UserPayload = response.data;

  return userInfo;
};

export const getUserPosts = async (userId: string) => {
  const url = `${BASE_URL}/posts/users/${userId}`;

  const response: AxiosResponse = await axios.get(url).then(data => {
    return data;
  });

  const userPosts: UserPostInfo[] = response.data;

  return userPosts;
};
