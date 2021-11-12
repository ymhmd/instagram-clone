import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {HomePostPayload, PostState, UserPostPayload} from './types';

export const initialState = {
  userPosts: {
    isLoading: false,
    error: false,
    userPostInfo: undefined,
  },
  homePosts: {
    isLoading: false,
    error: false,
    homePostInfo: undefined,
  },
} as PostState;

export const userSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    userPostsRequest(state) {
      state.userPosts.isLoading = true;
    },

    homePostsRequest(state) {
      state.homePosts.isLoading = true;
    },

    userPostsSuccess(state, payloadData: PayloadAction<UserPostPayload[]>) {
      state.userPosts.isLoading = false;
      state.userPosts.error = false;

      state.userPosts.userPostInfo = payloadData.payload;
    },

    homePostsSuccess(state, payloadData: PayloadAction<HomePostPayload[]>) {
      state.homePosts.isLoading = false;
      state.homePosts.error = false;

      state.homePosts.homePostInfo = payloadData.payload;
    },

    userPostsFailure(state) {
      state.userPosts.isLoading = false;
      state.userPosts.error = true;
    },

    homePostsFailure(state) {
      state.homePosts.isLoading = false;
      state.homePosts.error = true;
    },
  },
});

export const {
  userPostsRequest,
  userPostsSuccess,
  userPostsFailure,
  homePostsRequest,
  homePostsSuccess,
  homePostsFailure,
} = userSlice.actions;

export const postsReducer = userSlice.reducer;
