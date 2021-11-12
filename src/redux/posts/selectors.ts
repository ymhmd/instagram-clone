import {createSelector} from '@reduxjs/toolkit';

import {PostState} from './types';

const postsSelector = ({posts}: {posts: PostState}): PostState => posts;

export const userPostsSelector = createSelector(
  postsSelector,
  ({userPosts}) => {
    return userPosts;
  },
);

export const homePostsSelector = createSelector(
  postsSelector,
  ({homePosts}) => {
    return homePosts;
  },
);

export const userPostsIsLoadingSelector = createSelector(
  userPostsSelector,
  ({isLoading}) => {
    return isLoading;
  },
);

export const userPostsBasicInfoSelector = createSelector(
  userPostsSelector,
  ({userPostInfo}) => {
    return userPostInfo;
  },
);

export const homePostsIsLoadingSelector = createSelector(
  homePostsSelector,
  ({isLoading}) => {
    return isLoading;
  },
);

export const homePostsBasicInfoSelector = createSelector(
  homePostsSelector,
  ({homePostInfo}) => {
    return homePostInfo;
  },
);
