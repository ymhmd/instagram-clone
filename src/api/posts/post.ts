import axios, {AxiosResponse} from 'axios';
import {BASE_URL} from '../env';

import {HomePostPayload} from '../../redux/posts';
import {PostLikePayload} from '../../redux/like';

export const getAllPosts = async (userId: string) => {
  const url = `${BASE_URL}/homePosts/${userId}`;

  const response: AxiosResponse = await axios.get(url).then(data => {
    return data;
  });

  const userPosts: HomePostPayload[] = response.data;
  return userPosts;
};

export const getPostLikes = async (postId: string) => {
  const url = `${BASE_URL}/likes/post/${postId}`;

  const response: AxiosResponse = await axios.get(url).then(data => {
    return data;
  });

  const postLikes: PostLikePayload[] = response.data;
  return postLikes;
};
