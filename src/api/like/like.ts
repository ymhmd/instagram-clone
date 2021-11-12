import axios from 'axios';

import {BASE_URL} from '../env';

const client = axios.create({
  baseURL: BASE_URL,
});

export const like = async (
  userId: string,
  userHandle: string,
  userName: string,
  postId: string,
  postUserId: string,
  userProfilePictureUri: string | undefined,
) => {
  const data = {
    userId,
    userHandle,
    userName,
    userProfilePictureUri,
    postId,
    postUserId,
  };

  await client.post('/like', data, {
    headers: {'Content-Type': 'application/json'},
  });
};

export const dislike = async (
  userId: string,
  postId: string,
  postUserId: string,
) => {
  const data = {
    userId,
    postId,
    postUserId,
  };

  await client.post('/dislike', data, {
    headers: {'Content-Type': 'application/json'},
  });
};
